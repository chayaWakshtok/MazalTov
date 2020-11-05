using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Utils
{
    public class Converters
    {
        private static AutoMapper.MapperConfiguration _conffiguration = new AutoMapper.MapperConfiguration(cfg =>
          {
              cfg.CreateMap<DAL.user, DTO.user>();
              cfg.CreateMap<DTO.user, DAL.user>();
              cfg.CreateMap<DAL.user, DTO.user>();
              cfg.CreateMap<DTO.user, DAL.user>();


          });

        private static IMapper _mapper = _conffiguration.CreateMapper();

        public static DTO.user Convert(DAL.user dal)
        {
            return _mapper.Map<DTO.user>(dal);
        }

        public static DAL.user Convert(DTO.user dto)
        {
            return _mapper.Map<DAL.user>(dto);
        }

        public static List< DAL.user> Convert(List< DTO.user> dto)
        {
            return _mapper.Map<List<DAL.user>>(dto);
        }

    }
}
