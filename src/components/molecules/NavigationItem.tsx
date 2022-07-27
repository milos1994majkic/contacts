import React from 'react'

interface Props {
  icon: JSX.Element
  title: string
  isActive: { isActive: boolean }
  badge?: JSX.Element
}

export default function NavigationItem({ icon, title, isActive, badge }: Props) {
  return (
    <div
      className={`flex justify-between mb-4 ${
        isActive.isActive ? 'bg-gray-100' : null
      } rounded-lg px-2.5 py-2.5`}
    >
      <div className="flex h-6 font-medium text-gray-600">
        <div className="mr-4">{icon}</div>
        {title}
      </div>
      <div className="float-right">{badge}</div>
    </div>
  )
}
