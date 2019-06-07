require 'spaceship'

module Fastlane
  module Actions
    class LatestTestflightVersionAction < Action

      # Retrieves the latest version uploaded to ItunesConnect

      def self.run(params)

        Spaceship::Tunes.login(params[:username])
        Spaceship::Tunes.client.team_id = params[:team_id]

        app = Spaceship::Tunes::Application.find(params[:bundle_id])
        if app.nil?
          UI.abort_with_message! "The application with bundle ID '#{params[:bundle_id]}' is not yet created in iTunes Connect."
        end
        if app.all_build_train_numbers.empty?
          return params[:initial_version_number]
        end
        app.all_build_train_numbers.map { |v| Gem::Version.new(v) }.max.to_s
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :bundle_id, optional: false),
          FastlaneCore::ConfigItem.new(key: :initial_version_number, optional: false),
          FastlaneCore::ConfigItem.new(key: :username, optional: false),
          FastlaneCore::ConfigItem.new(key: :team_id, optional: false)
        ]
      end

    end
  end
end
