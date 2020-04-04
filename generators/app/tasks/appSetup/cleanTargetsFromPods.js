module.exports = function cleanTargetsFromPods() {
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  let updatedPodfileContent = podfileContent.replace(
    "  target 'UltimaPruebaTests' do\n    inherit! :complete\n    # Pods for testing\n  end",
    ''
  );
  updatedPodfileContent = podfileContent.replace(
    "target 'UltimaPrueba-tvOS' do\n  # Pods for UltimaPrueba-tvOS\n\n  target 'UltimaPrueba-tvOSTests' do\n    inherit! :search_paths\n    # Pods for testing\n  end\nend",
    ''
  );
  this.fs.write(`${this.projectName}/ios/Podfile`, updatedPodfileContent);
};
