using BookStore.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookStore.API.Interfaces
{
    public interface IBookRepository : IRepository<Book>
    {
        new Task<List<Book>> GetAll();
        new Task<Book> GetById(int id);
        Task<IEnumerable<Book>> GetBooksByCategory(int categoryId);
        Task<IEnumerable<Book>> SearchBookWithCategory(string searchedValue);
    }
}
