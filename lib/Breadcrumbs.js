import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-2 mb-8  ">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <svg 
              className="w-5 h-5 mx-2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          )}
          
          {item.link ? (
            <Link 
              href={item.link}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center text-gray-800 font-semibold">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}