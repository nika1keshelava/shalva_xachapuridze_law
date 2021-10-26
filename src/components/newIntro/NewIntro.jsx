import "./newIntro.scss";

export default function NewIntro() {

  return (
    <div className="NewIntro" id="NewIntro">
      <div className="menu">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" id="show-menu">
        <div className="btn">
          <i className="material-icons md-36 toggleBtn menuBtn">menu</i>
          <i className="material-icons md-36 toggleBtn closeBtn">close</i>
        </div>

        <div className="btn"><i className="material-icons md-36">photo_camera</i></div>
        <div className="btn"><i className="material-icons md-36">photo</i></div>
        <div className="btn"><i className="material-icons md-36">music_note</i></div>
        <div className="btn"><i className="material-icons md-36">settings</i></div>
        <div className="btn"><i className="material-icons md-36">phone</i></div>
        <div className="btn"><i className="material-icons md-36">cloud</i></div>
        <div className="btn"><i className="material-icons md-36">videocam</i></div>
        <div className="btn"><i className="material-icons md-36">chat_bubble</i></div>

        </label>

      </div>
      
    </div>
  );
}
