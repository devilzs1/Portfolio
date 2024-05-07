
import { certificateData } from "./Data";
import CertificateItems from "./CertificateItems";
import "./certificate.css";

const Certificates = () => {

  return (
    <div>
      <div className="certificate_container container grid">
        {certificateData.map((item) => {
          return <CertificateItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Certificates;
