module.exports = function splashScreenSetup() {
  // Update MainActivity
  const mainActivityContent = this.fs.read(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`
  );
  let updatedMainActivityContent = mainActivityContent.replace(
    'import com.facebook.react.ReactActivity;',
    'import android.os.Bundle;\nimport org.devio.rn.splashscreen.SplashScreen;\nimport com.facebook.react.ReactActivity;'
  );
  updatedMainActivityContent = updatedMainActivityContent.replace(
    'public class MainActivity extends ReactActivity {',
    'public class MainActivity extends ReactActivity {\n\t@Override\n\tprotected void onCreate(Bundle savedInstanceState) {\n\t\tSplashScreen.show(this);\n\t\tsuper.onCreate(savedInstanceState);\n\t}'
  );

  this.fs.write(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`,
    updatedMainActivityContent
  );

  // Update AppDelegate
  const appDelegateContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`);
  let updatedAppDelegateContent = appDelegateContent.replace(
    '#import <React/RCTRootView.h>',
    '#import <React/RCTRootView.h>\n#import "RNSplashScreen.h"'
  );
  updatedAppDelegateContent = updatedAppDelegateContent.replace(
    'return YES;',
    '[RNSplashScreen show];\n\treturn YES;'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`, updatedAppDelegateContent);

  // Add launch_screen.xml
  this.fs.copy(
    this.templatePath('android', 'launch_screen.xml'),
    this.destinationPath(
      this.projectName,
      'android',
      'app',
      'src',
      'main',
      'res',
      'layout',
      'launch_screen.xml'
    )
  );
};
