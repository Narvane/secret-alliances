export default function PlayerController({move}) {
    return (
        <div>
            <a className="btn btn-primary" onClick={() => move()}>Move</a>
        </div>
    );
}

