﻿var fs = require('fs');

module.exports = {
	port: 5555,
    title: 'Mediaplayer',
	env: 'public', // public | local
    secret: 'expressSecretMediaPlayer',
	remoteServiceUrl: null,
    routes: {
        get: [{
            route: '/mediaplayer',
            view: 'mediaplayer',
            callback: function (req, res) {
                return {title: 'Mediaplayer', uploadStatus: ''};
            }
        }],
        post: [{
			route: '/mediaplayer',
			view: 'mediaplayer',
			callback: function (req, res) {
				// save uploaded file
				var start = new Date();
                return {title: 'Mediaplayer', uploadStatus: ''};
/*
				fs.readFile(req.files.uploadFile.path, function (err, data) {
					var newPath = "/tmp/" + req.files.uploadFile.name;
					fs.writeFile(newPath, data, function (err) {
						var end = new Date();
						var duration = end.getTime() - start.getTime();
						var mbSize = Math.round(100*req.files.uploadFile.size/(1024*1024))/100;
						mediaplayerService.displayOnScreen(newPath);
						mediaplayerService.refreshPlaylist();
						res.render('titlelist', { title: 'Mediaplayer', uploadStatus: 'Datei mit ' + mbSize + 'MB hochgeladen in ' + duration + ' seconds' });
					});
				});
*/
            }
		}],
        redirect: [/*{
            route: '/mediaplayer',
            view: 'index',
            callback: function (req, res) {
                return {title: ''};
            }
        }*/]
    }
};
