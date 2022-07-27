import { NavLink } from 'react-router-dom'
import CreateButton from '../../atoms/CreateButton'
import Badge from '../../icons/Badge'
import Bookmark from '../../icons/BookmarkIcon'
import HeroIcon from '../../icons/HeroIcon'
import PlusIcon from '../../icons/PlusIcon'
import StarIcon from '../../icons/StarIcon'
import UserIcon from '../../icons/UserIcon'
import NavigationItem from '../../molecules/NavigationItem'

export default function SideMenu() {
  return (
    <div className="w-1/5 pt-5 pl-4">
      <NavLink to="/">
        <div className="flex mb-6">
          <HeroIcon />
          <p className="ml-2.5 font-bold text-lg cursor-pointer">Contacts</p>
        </div>
      </NavLink>
      <div className="w-3/5 mb-6 ">
        <NavLink to="create">
          <CreateButton />
        </NavLink>
      </div>
      <div className="mb-4">
        <NavLink to="/">
          {(isActive) => (
            <NavigationItem icon={<UserIcon />} title="Contacts" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="favorites">
          {(isActive) => (
            <NavigationItem icon={<StarIcon />} title="Favorites" isActive={isActive} />
          )}
        </NavLink>
      </div>
      <div className="flex items-center font-normal text-lg mb-4">
        Labels
        <div className="flex-grow h-px bg-gray-400 mx-4"></div>
      </div>
      <NavLink to="/work">
        {(isActive) => (
          <NavigationItem
            icon={<Bookmark />}
            title="Work"
            isActive={isActive}
            badge={<Badge value={6} isActive={isActive} />}
          />
        )}
      </NavLink>
      <NavLink to="family" className={({ isActive }) => (isActive ? 'bg-gray-400' : undefined)}>
        {(isActive) => (
          <NavigationItem
            icon={<Bookmark />}
            title="Family"
            isActive={isActive}
            badge={<Badge value={3} isActive={isActive} />}
          />
        )}
      </NavLink>
      <NavLink to="friends">
        {(isActive) => (
          <NavigationItem
            icon={<Bookmark />}
            title="Friends"
            isActive={isActive}
            badge={<Badge value={1} isActive={isActive} />}
          />
        )}
      </NavLink>
      <NavLink to="newLabel">
        {(isActive) => (
          <NavigationItem icon={<PlusIcon />} title="Create Label" isActive={isActive} />
        )}
      </NavLink>
    </div>
  )
}
