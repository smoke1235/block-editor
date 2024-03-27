const glob = require( 'fast-glob' );
const ProgressBar = require( 'progress' );
const makeDir = require( 'make-dir' );
const path = require( 'path' );
const fs = require('fs');

var modulesToBuild = [
    "block-editor",
    "editor",
    "edit-post",
    "components",
    "block-library",
    "format-library",
    "nux",
    "list-reusable-blocks",
    "commands",
    "edit-site",
    "edit-widgets",
    "block-directory",
    "customize-widgets",
    "patterns",
    "reusable-blocks",
    "widgets"
];


const PACKAGES_DIR = path
	.resolve( __dirname, '../../node_modules/@wordpress/' )
	.replace( /\\/g, '/' );


const buildDir = path
    .resolve( __dirname, '../../packages/' )
    .replace( /\\/g, '/' );

if (!fs.existsSync(buildDir)){
    fs.mkdirSync(buildDir);
}

for (module of modulesToBuild) {
    

    var directoryPath = PACKAGES_DIR + "/"+ module + "/build-style/";
    var destinationFolder = buildDir + "/"+ module + "/";

    copyResources(directoryPath , destinationFolder, module);
}

var files = [];

const bar = new ProgressBar( 'Build Progress: [:bar] :percent', {
    width: 30,
    incomplete: ' ',
    total: 1,
} );

bar.tick( 0 );

/**
 * Get the package name for a specified file
 *
 * @param {string} file File name.
 *
 * @return {string} Package name.
 */
function getPackageName( file ) {
	return path.relative( PACKAGES_DIR, file ).split( path.sep )[ 0 ];
}

function getBuildPath( file, buildFolder ) {
	const pkgName = getPackageName( file );
	const pkgSrcPath = path.resolve( PACKAGES_DIR, pkgName, 'build-style' );
	const pkgBuildPath = path.resolve( PACKAGES_DIR, pkgName, buildFolder );
	const relativeToSrcPath = path.relative( pkgSrcPath, file );
	return path.resolve( pkgBuildPath, relativeToSrcPath );
}

function copyResources(srcDir, destDir, module) {
    

    let stream;
    let onFileComplete = () => {};

	

    stream = glob.stream(
		[
			`${ srcDir }*.css`,
		],
		{
			ignore: [
				`**/benchmark/**`,
				`**/{__mocks__,__tests__,test}/**`,
				`**/{storybook,stories}/**`,
				`**/e2e-test-utils-playwright/**`,
			],
			onlyFiles: true,
		}
	);

    // Pause to avoid data flow which would begin on the `data` event binding,
	// but should wait until worker processing below.
	//
	// See: https://nodejs.org/api/stream.html#stream_two_reading_modes
	stream.pause().on( 'data', ( file ) => {
		bar.total = files.push( file );
	} );

	onFileComplete = () => {
		bar.tick();
	};


    stream
	.on( 'data', ( file ) => {
        var outputFile = getBuildPath(file, destDir);
        makeDir( path.dirname( outputFile ) ),
        

        fs.copyFile(file, outputFile, (err) => {

            onFileComplete();


            if (err) {
                process.exitCode = 1;

				console.error( err );
            }
            
        });
    })
	.on( 'end', () => ( ended = true ) )
	.resume();


}

