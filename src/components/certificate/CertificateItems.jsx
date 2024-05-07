
import "./certificate.css";

const CertificateItems = ({ item }) => {
  return (
    <div className="certificate_card" key={item.id}>
      <img src={item.image} alt="" className="certificate_img" />
      <h3 className="certificate_title">{item.title}</h3>
      <div className="certificate_button-list">
        <a
          href={item.link}
          className="certificate_button"
          target="_self"
          rel="noopener noreferrer"
        >
          View <i className="bx bx-right-arrow-alt certificate_button-icon"></i>
        </a>
        {/* <a href='#' className="certificate_button">
                Code <i className="bx bx-right-arrow-alt certificate_button-icon"></i>
            </a> */}
      </div>
    </div>
  );
};

export default CertificateItems;
