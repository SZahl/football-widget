
const Header = ({ data }) => {

    const stats = data;
    const league = data.meta.competition.name;
    const homeTeam = data.contestant[0].name;
    const awayTeam = data.contestant[1].name;
    const homeScore = data.liveData.matchDetails.scores.total.home;
    const awayScore = data.liveData.matchDetails.scores.total.away;

    // console.log('stats', stats)
    // console.log('team', homeTeam)


    return (
        <>
        <header className="header">
            <p className="league">{league}</p>
            <p className="team"><img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png" height="28px"alt="arsenal badge"></img>{homeTeam}</p>
            <p className="team"><img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png" height="28px" alt="fulham badge"></img>{awayTeam}</p>
            <ul className="ftScore">
                <li>FT</li>
                <li>{homeScore}</li>
                <li>{awayScore}</li>
            </ul>
        </header>
        </>
    )
}

export default Header;