echo "Platform : " $2
echo "Variant founded : " $1 
echo "Replacing google files..."

# ANDROID
if [ $2 = "android" ]
then
    if [[ $1 == *"Qa"* ]]; then
        cp -f google-services/google-services-qa.json ./google-services.json
    elif [[ $1 == *"Stage"* ]]; then
        cp -f google-services/google-services-stage.json ./google-services.json
    elif [[ $1 == *"Prod"* ]]; then
        cp -f google-services/google-services-production.json ./google-services.json
    else
        echo "Setting qa by default"
        cp -f google-services/google-services-qa.json ./google-services.json
    fi
fi

# IOS
if [ $2 = "ios" ]
then
    if [ $1 = "com.wolox.wolmorn.dev" ]; then
        cp -f GoogleServices/GoogleServiceQa-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.wolox.wolmorn.stage" ]; then
        cp -f GoogleServices/GoogleServiceStage-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.wolox.wolmorn" ]; then
        cp -f GoogleServices/GoogleServiceProduction-Info.plist GoogleService-Info.plist
    else
        echo "Setting qa by default"
        cp -f GoogleServices/GoogleServiceQa-Info.plist GoogleService-Info.plist
    fi
fi

echo "Replacing google files finished."
