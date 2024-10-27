using Microsoft.EntityFrameworkCore;
using WebApplication1.Core.Entities;
using WebApplication1.Persistent;

namespace WebApplication1.Service
{
    public interface IShoeService
    {
        public Task<List<Shoe>> GetAllShoeAsync();
        public Task<Shoe> GetShoeById(Guid id);
    }
    public class ShoeService : BaseService<Shoe>, IShoeService
    {
        public ShoeService(ApplicationContext context) : base(context)
        {
        }

        public async Task<List<Shoe>> GetAllShoeAsync()
        {
            return await GetAllAsync();
        }

        public async Task<Shoe> GetShoeById(Guid id)
        {
            var shoe = await GetAsync(id);
            if(shoe == null) throw new Exception($"Shoe with id {id} is not found");
            return shoe;

        }
    }
}
