if (args.length == 0 || args[0] == "/?") {
    print("Downloads a file from Pastebin.");
    print("usage: pastebin get [id] [filename]");
	throw 0;
}

function pastebinGET(id, filename) {
	if (filename) {
		var request = net.get("http://pastebin.com/raw.php?i=" + id);
		print("Downloading Pastebin " + id);
		fs.write(fs.combine(os.cwd, filename)).write(request.readAll()).close();
		print("Finished download.");
		request.close();
	} else {
		throw "Invalid filename.";
	}
}

// The action being performed, ex, "get"
switch (args[0]) {
    case "get":
        pastebinGET.call(this, args);
        break;
}