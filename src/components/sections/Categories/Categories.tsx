import './Categories.scss'
import { CATEGORIES } from '@/data/categories'

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">
        {CATEGORIES.map((category) => (
          <div
            key={category.name}
            className={`category ${category.active ? 'category--active' : ''}`}
          >
            <div className="category__box">
              <img
                src={category.icon}
                alt={category.name}
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <span className="category__name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
