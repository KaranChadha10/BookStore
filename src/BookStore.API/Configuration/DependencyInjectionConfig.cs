using BookStore.API.Interfaces;
using BookStore.API.Repositories;
using BookStore.API.Services;
using BookStore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace BookStore.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<BookStoreDbContext>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IBookRepository, BookRepository>();

            services.AddScoped<ICategoryService,CategoryService>();
            services.AddScoped<IBookService, BookService>();

            return services;
        }
    }
}
