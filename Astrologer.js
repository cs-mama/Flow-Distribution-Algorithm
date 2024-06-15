class Astrologer {
    constructor(id, name, top = false) {
        this.id = id;
        this.name = name;
        this.top = top;
        this.connections = 0;
    }
}

module.exports = Astrologer;
