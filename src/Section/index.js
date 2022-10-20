import "./style.css";

const Section = ({title,description,body}) => (
  <section>
  <div className="section__title">{title}</div>
  <p className="section__description">
    {description}
  </p>
  <p className="section__description">
   {body}
  </p>
</section>
);

export default Section;