module Fastlane
  module Actions
    class GetCertificatesInfoAction < Action

      # Given an environment
      # this script returns the apple id (:account),
      # the developer portal team id (:team)
      # and the itunnes connect team id (:itc_team) associated to it.

      GIT_URL_ENV_KEY = "GIT_URL".freeze
      GIT_BRANCH_ENV_KEY = "GIT_BRANCH".freeze

      def self.run(params)
        {
          url: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[GIT_URL_ENV_KEY],
          branch: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[GIT_BRANCH_ENV_KEY]
        }
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
