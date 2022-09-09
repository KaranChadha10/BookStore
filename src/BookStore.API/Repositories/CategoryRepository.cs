using BookStore.API.Interfaces;
using BookStore.Domain;
using BookStore.Infrastructure;

namespace BookStore.API.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(BookStoreDbContext context) : base(context) { }
    }
}
