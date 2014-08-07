Package.describe({
	summary: "Upload files to Cloudinary"
});

Npm.depends({
	cloudinary: "1.0.8",
	"stream-buffers":"0.2.5"
});

Package.on_use(function (api){
	//Need service-configuration to use Meteor.method
	api.use(["underscore", "ejson","service-configuration","streams"], ["client", "server"]);
	api.use(["ui","templating","spacebars"], "client");

	//Image manipulation
	api.add_files("lib/jquery.iframe-transport.js","client");
	api.add_files("lib/jquery.ui.widget.js","client");
	api.add_files("lib/jquery.fileupload.js","client");
	api.add_files("lib/jquery.cloudinary.js","client");

	api.add_files("client/blocks.html", "client");
	api.add_files("client/helpers.js", "client");
	api.add_files("client/controllers.js","client");
	api.add_files("client/collections.js", "client");
	api.add_files("client/cloudinary_styles.css","client");
	api.add_files("server.js", "server");

	//Allow user access to Cloudinary server-side
	api.export && api.export("Cloudinary","server");
	api.export && api.export("_cloudinary","client");
});