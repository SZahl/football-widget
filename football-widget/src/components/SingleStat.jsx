
const SingleStat = ({ matchData }) => {

    return (
        <div className="singleStat">
        Home: {matchData.home} Away: {matchData.away}
        </div>
    )
}

export default SingleStat;