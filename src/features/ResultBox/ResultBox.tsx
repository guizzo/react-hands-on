interface ResultBoxInterface {
  result?: string;
}

const ResultBox = ({ result }: ResultBoxInterface) => {

  if (result === undefined) return null;

  return (
    <div className="result-box">
      { result === null && <span>Spiacente, nessun risultato trovato :/</span> }
      {
        result !== null && (
          // <pre>
          //   <code>
          //     { JSON.stringify(result, null, 2) }
          //   </code>
          // </pre>
          <img src={result} alt=""/>
        )
      }
    </div>
  );

};

export default ResultBox;
