using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
namespace DTO
{
  public  class AskPermssion
    {
        ////Initialize the mapper
        //var config = new MapperConfiguration(cfg =>
        //        cfg.CreateMap<askPermssion, askPermssionDTO>()
        //    );
        ////Using automapper
        //var mapper = new Mapper(config);
        //var empDTO = mapper.Map<askPermssionDTO>(emp);

        public int Id { get; set; }
        public string Remark { get; set; }
        public DateTime CreateDate { get; set; }
        public int Status { get; set; }
        public int PermssionId { get; set; }
        public int UserId { get; set; }

    }
    public class askPermssionDTO
    {

        public int Id { get; set; }
        public string Remark { get; set; }
        public DateTime CreateDate { get; set; }
        public int Status { get; set; }
        public int PermssionId { get; set; }
        public int UserId { get; set; }
    }


}
