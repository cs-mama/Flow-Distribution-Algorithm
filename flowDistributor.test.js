const FlowDistributor = require('../FlowDistributor');
const Astrologer = require('../Astrologer');
const User = require('../User');

describe('FlowDistributor', () => {
    let distributor;
    let astrologers;

    beforeEach(() => {
        astrologers = [
            new Astrologer(1, 'A', true),
            new Astrologer(2, 'B'),
            new Astrologer(3, 'C')
        ];
        distributor = new FlowDistributor(astrologers);
    });

    test('should distribute users fairly among astrologers', () => {
        const user1 = new User(1, 'User 1');
        const user2 = new User(2, 'User 2');

        const ast1 = distributor.distribute(user1);
        const ast2 = distributor.distribute(user2);

        expect(ast1.id).not.toEqual(ast2.id); // Should be distributed to different astrologers
    });

    test('should adjust flow for top astrologers', () => {
        distributor.adjustFlow(2, true);
        expect(astrologers[1].top).toBe(true); // Astrologer B should now be top
    });
});
