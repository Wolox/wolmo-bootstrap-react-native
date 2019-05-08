module Fastlane
  module Actions
    class SetInfoPlistVersionAction < Action

      # Sets the version and build number in project Info.plist

      VERSION_NUMBER_KEY = 'CFBundleShortVersionString'
      BUILD_NUMBER_KEY = 'CFBundleVersion'

      def self.run(params)
        info_plist_path = Actions::GetInfoPlistPathAction.run(environment: params[:environment])
        # Set version number in `Info.plist`
        Actions::SetInfoPlistValueAction.run(
          path: info_plist_path,
          key: VERSION_NUMBER_KEY,
          value: params[:version_number]
        )

        # Set build number in `Info.plist`
        Actions::SetInfoPlistValueAction.run(
          path: info_plist_path,
          key: BUILD_NUMBER_KEY,
          value: params[:build_number]
        )
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol),
          FastlaneCore::ConfigItem.new(key: :version_number, optional: false),
          FastlaneCore::ConfigItem.new(key: :build_number, optional: false),
        ]
      end

    end
  end
end
