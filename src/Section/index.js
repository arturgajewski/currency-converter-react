import "./style.css";

const Section = ({ title, description, information, body }) => (
  <section>
    <div className="section__title">{title}</div>
    <div className="section__description">
      {description}
      {body}
      {information}
    </div>
  </section>
);

export default Section;
