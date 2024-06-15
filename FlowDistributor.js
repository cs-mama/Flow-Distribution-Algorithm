class FlowDistributor {
    constructor(astrologers) {
        this.astrologers = astrologers;
        this.index = 0;
    }

    distribute(user) {
        let astrologer = this.astrologers[this.index];
        this.index = (this.index + 1) % this.astrologers.length;

        if (astrologer.top) {
            // Higher chance for top astrologers
            if (Math.random() < 0.7) {
                astrologer.connections++;
                return astrologer;
            }
        }
        
        // Assign to next astrologer if not a top astrologer
        astrologer = this.astrologers[this.index];
        astrologer.connections++;
        return astrologer;
    }

    adjustFlow(astrologerId, makeTop) {
        const astrologer = this.astrologers.find(a => a.id === astrologerId);
        if (astrologer) {
            astrologer.top = makeTop;
        }
    }
}

module.exports = FlowDistributor;
