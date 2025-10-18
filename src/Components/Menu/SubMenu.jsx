const SubMenu = ({ subMenu }) => {
  return (
    <div className="sub-menu-column pe-5">
      {subMenu.column.map((col) => {
        return (
          <div key={col.id}>
            <h2>{col.title}</h2>
            <ul className="list-unstyled">
              {col.ul.map((li) => {
                return (
                  <li key={li.id}>
                    <a href="#" className="nav-link px-0 text-white ">
                      {li.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
