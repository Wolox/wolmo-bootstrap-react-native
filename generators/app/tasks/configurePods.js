const fixedContent = `
post_install do |installer|
  installer.pods_project.targets.each do |target|
    if target.name == 'react-native-config'
      phase = target.project.new(Xcodeproj::Project::Object::PBXShellScriptBuildPhase)
      phase.shell_script = "cd ../../"\\
      " && RNC_ROOT=./node_modules/react-native-config/"\\
      " && export SYMROOT=$RNC_ROOT/ios/ReactNativeConfig"\\
      " && ruby $RNC_ROOT/ios/ReactNativeConfig/BuildDotenvConfig.ruby"

      target.build_phases << phase
      target.build_phases.move(phase,0)
    end
  end
end
`;

module.exports = function configurePods() {
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  const fixedPodfileContent = podfileContent.concat(fixedContent);
  this.fs.write(`${this.projectName}/ios/Podfile`, fixedPodfileContent);
};
