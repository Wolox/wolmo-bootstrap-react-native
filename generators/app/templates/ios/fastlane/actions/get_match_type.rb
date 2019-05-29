module Fastlane
  module Actions
    class GetMatchTypeAction < Action

      # Given an environment
      # this script returns the match type associated to it.

      # Default match types by environment
      MATCH_TYPES = {
        dev: "development",
        qa: "appstore",
        stage: "appstore",
        production: "appstore"
      }.freeze

      def self.run(params)
        MATCH_TYPES[params[:environment]]
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol)
        ]
      end

    end
  end
end
