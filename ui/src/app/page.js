"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerController from "@/components/playerController";
import MasterController from "@/components/masterController";
import {useState} from "react";
import RoundActions from "@/components/roundActions";
import ScreenAgent from "@/components/screenAgent";
import players from "@/data/players";
import masters from "@/data/masters";

export default function Home() {
    const roundActions = new RoundActions();

    players[0].controller = <PlayerController move={roundActions.move}/>
    players[1].controller = <PlayerController move={roundActions.move}/>

    masters[0].controller = <MasterController draw={roundActions.draw} players={players}/>
    masters[1].controller = <MasterController draw={roundActions.draw} players={players}/>

    const [roundMaster, setRoundMaster] = useState(masters[0]);
    const [roundController, setRoundController] = useState(masters[0]);

    roundActions.subscribeAgent(new ScreenAgent({
        masters, players,
        roundMaster, setRoundMaster,
        roundController, setRoundController
    }));

    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
            <div className="d-flex justify-content-center w-75 h-75 align-items-center border border-1">
                <h2>{roundController.name}</h2>
                {roundController.controller}
            </div>
        </div>
    );
}
