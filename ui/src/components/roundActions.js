import WebSocketAgent from "@/components/webSocketAgent";

export default function RoundActions() {

    this.agents = [
        new WebSocketAgent()
    ];

    this.subscribeAgent = (agent) => {
        this.agents.push(agent);
    }

    this.draw = (player) => {
        this.agents.forEach(agent => {
            agent.draw(player);
        })
    }

    this.move = () => {
        this.agents.forEach(agent => {
            agent.move();
        })
    }

}