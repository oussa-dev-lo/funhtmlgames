var preloadedInterstitial = null;
var progress = 0;

window.onload = function() {
    FBInstant.initializeAsync()
        .then(_loading);
};

function _loading() {
    progress += 1;
    FBInstant.setLoadingProgress(progress);
    if (progress < 100)
        window.setTimeout(() => _loading(), 30);
    else {
        FBInstant.startGameAsync().then(() => {
            subscribeBot()
        });
        _preloadInterstitial()
        window.setTimeout(() => tryCreateShortcut(), 180000);
    }
}

function _preloadInterstitial() {
    preloadedInterstitial = null
    return FBInstant.getInterstitialAdAsync('814079985741041_814829032332803')
        .then(function(interstitial) {
            preloadedInterstitial = interstitial;
            return preloadedInterstitial.loadAsync();
        })
        .then(function() {
            console.log('Interstitial preloaded');
        })
        .catch(function(error) {
            console.log('Interstitial failed to preload: ' + error.message);
        });
}

function showInterstitial() {
    if (!preloadedInterstitial) {
        return
    }
    preloadedInterstitial.showAsync()
        .then(function() {
            console.log('Interstitial watched!');
            _preloadInterstitial()
        })
        .catch(function(error) {
            if (!preloadedInterstitial) {
                _preloadInterstitial()
            }
            console.log(error.message);
        });
}

var isDie = true;

function showAds() {
    if (isDie) {
        isDie = false;
        showInterstitial();
        window.setTimeout(() => { isDie = true; }, 20000);
    }
}

function subscribeBot() {
    FBInstant.player.canSubscribeBotAsync().then((canSubscribe) => {
        if (canSubscribe) {
            FBInstant.player.subscribeBotAsync().then().catch((err) => {
                console.log(err, 'bot')
            })
        }
    }).catch(err => console.log(err, 'can subscribe'))
}

function tryCreateShortcut() {
    FBInstant.canCreateShortcutAsync()
        .then(function(success) {
            if (success) {
                FBInstant.createShortcutAsync()
                    .then(function() {
                        display.success('Shortcut prompt initiated successfully!');
                    })
                    .catch(function(error) {
                        display.error('Could not create shortcut: ' + error.message);
                    });
            } else {
                display.error('The shortcut prompt can only appear once per game session.');
            }
        });
}