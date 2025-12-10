class File {
    constructor(id, filename, mimetype, size, url, createdAt) {
        this.id = id;
        this.filename = filename;
        this.mimetype = mimetype;
        this.size = size;
        this.url = url;
        this.createdAt = createdAt;
    }
}

module.exports = File;
