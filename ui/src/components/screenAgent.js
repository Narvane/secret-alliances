

export default function ScreenAgent(roundProps) {

    this.draw = function(player) {
        roundProps.setRoundController(player);
    }

    this.move = function() {
        roundProps.setRoundMaster((prevMaster) => {
            const newMaster = prevMaster.name === roundProps.masters[0].name ? roundProps.masters[1] : roundProps.masters[0];
            roundProps.setRoundController(newMaster);
            return newMaster;
        });
    }

}