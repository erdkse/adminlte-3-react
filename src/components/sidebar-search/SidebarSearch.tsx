import { IMenuItem, MENU } from '@app/modules/main/menu-sidebar/MenuSidebar';
import { Dropdown } from '@profabric/react-components';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDropdown = styled(Dropdown)`
  border: none;
  width: 100%;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  --pf-dropdown-menu-min-width: 14.625rem;
  --pf-dropdown-border: none;
  --pf-dropdown-menu-margin-top: 0px;

  .menu {
    background-color: #454d55;
  }

  .dropdown-item {
    padding: 0.5rem 1rem;
  }

  .nothing-found {
    color: #c2c7d0;
    padding: 0.25rem 0.5rem;
  }

  .list-group {
    .list-group-item {
      padding: 0.5rem 0.75rem;
      cursor: pointer;
    }

    .search-path {
      font-size: 80%;
      color: #adb5bd;
    }
  }
`;

export const SidebarSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [foundMenuItems, setFoundMenuItems] = useState<IMenuItem[]>([]);
  const dropdown = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setFoundMenuItems([]);
    if (searchText) {
      setFoundMenuItems(findMenuItems(MENU));
    } else {
      setSearchText('');
      setFoundMenuItems([]);
    }
  }, [searchText]);

  useEffect(() => {
    if (foundMenuItems && foundMenuItems.length > 0) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [foundMenuItems]);

  const handleIconClick = () => {
    setSearchText('');
    setIsDropdownOpen(false);
  };

  const handleMenuItemClick = () => {
    setSearchText('');
    setIsDropdownOpen(false);
  };

  const findMenuItems = (
    menuItems: IMenuItem[],
    results: IMenuItem[] = []
  ): IMenuItem[] => {
    for (const menuItem of menuItems) {
      if (menuItem.name.includes(searchText) && menuItem.path) {
        results.push(menuItem);
      }
      if (menuItem.children) {
        return findMenuItems(menuItem.children, results);
      }
    }
    return results;
  };

  const boldString = (str: string, substr: string) => {
    return str.replaceAll(
      substr,
      `<strong class="text-light">${substr}</strong>`
    );
  };

  return (
    <StyledDropdown
      ref={dropdown}
      isOpen={isDropdownOpen}
      hideArrow
      openOnButtonClick={false}
    >
      <div slot="head">
        <div className="input-group">
          <input
            className="form-control form-control-sidebar"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onInput={(e: any) => setSearchText(e?.target?.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-sidebar"
              onClick={() => handleIconClick()}
            >
              <i
                className={`fas ${searchText.length === 0 && 'fa-search'} ${
                  searchText.length > 0 && 'fa-times'
                } fa-fw`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="menu" slot="body">
        {foundMenuItems && foundMenuItems.length === 0 && (
          <div className="nothing-found">No Element found</div>
        )}
        {foundMenuItems.length > 0 && (
          <div className="list-group">
            {foundMenuItems &&
              foundMenuItems.map((menuItem: any) => (
                <NavLink
                  key={menuItem.name + menuItem.path}
                  className="list-group-item"
                  to={menuItem.path}
                  onClick={() => handleMenuItemClick()}
                >
                  <div
                    className="search-title"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: boldString(menuItem.name, searchText),
                    }}
                  />
                  <div className="search-path">{menuItem.name}</div>
                </NavLink>
              ))}
          </div>
        )}
      </div>
    </StyledDropdown>
  );
};
