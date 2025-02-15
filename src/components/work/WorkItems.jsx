import "./work.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <div className="work_button-list">
        {/* {item.link.length > 1 && (
          <a
            href={item.link}
            className="work_button"
            target="_self"
            rel="noopener noreferrer"
          >
            Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
          </a>
        )} */}
        {item.code.length > 0 && (
          <a href={item.code} className="work_button">
            Code <i className="bx bx-right-arrow-alt work_button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
