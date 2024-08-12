"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerController from "@/components/playerController";
import MasterController from "@/components/masterController";
import {useState} from "react";


export default function Home() {
    const players = [
        {   name: "Player 1",
            controller: <PlayerController move={move}/>
        },
        {   name: "Player 2",
            controller: <PlayerController move={move}/>
        }
    ];

    let masters = [
        {
            name: "Master 1",
            controller: <MasterController draw={draw} players={players}/>
        },
        {
            name: "Master 2",
            controller: <MasterController draw={draw} players={players}/>
        }
    ];

    const [roundMaster, setRoundMaster] = useState(masters[0]);
    const [roundController, setRoundController] = useState(masters[0]);

    function draw(player) {
        setRoundController(player);
    }

    function move() {
        setRoundMaster((prevMaster) => {
            const newMaster = prevMaster.name === masters[0].name ? masters[1] : masters[0];
            setRoundController(newMaster);
            return newMaster;
        });
    }

    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
            <div className="d-flex justify-content-center w-75 h-75 align-items-center border border-1">
                <h2>{roundController.name}</h2>
                {roundController.controller}
            </div>
        </div>
    );
}
