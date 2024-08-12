export default function MasterController({draw, players}) {
    return (
        <div>
            {
                players.map((player, index) => (
                        <a className="btn btn-primary" onClick={e => draw(player)}>{ player.name }</a>
                    )
                )
            }
        </div>
    );
}