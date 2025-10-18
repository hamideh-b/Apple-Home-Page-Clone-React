const Breadcrumb = ({ breadcrumb }) => {
  return (
    <li className="breadcrumb-item p-0 pe-1">
      <a href="" className="nav-link d-inline-block ">
        {breadcrumb.name}
      </a>
    </li>
  );
};

export default Breadcrumb;
