using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using DAL;
//using DTO;
namespace BL.Utils
{
    public class Converters
    {
        private static AutoMapper.MapperConfiguration _conffiguration = new AutoMapper.MapperConfiguration(cfg =>
          {
              cfg.CreateMap<DAL.askPermssion, DTO.AskPermssion>();
              cfg.CreateMap<DTO.AskPermssion, DAL.askPermssion>();

              cfg.CreateMap<DAL.bank, DTO.Bank>();
              cfg.CreateMap<DTO.Bank, DAL.bank>();

              cfg.CreateMap<DAL.candidate, DTO.Candidate>();
              cfg.CreateMap<DTO.Candidate, DAL.candidate>();


              cfg.CreateMap<DAL.candidateComment, DTO.CandidateComment>();
              cfg.CreateMap<DTO.CandidateComment, DAL.candidateComment>();

              cfg.CreateMap<DAL.chasidut, DTO.Chasidut>();
              cfg.CreateMap<DTO.Chasidut, DAL.chasidut>();

              cfg.CreateMap<DAL.city, DTO.City>();
              cfg.CreateMap<DTO.City, DAL.city>();

              cfg.CreateMap<DAL.contactu, DTO.Contactus>();
              cfg.CreateMap<DTO.Contactus, DAL.contactu>();

              cfg.CreateMap<DAL.endMatching, DTO.EndMatching>();
              cfg.CreateMap<DTO.EndMatching, DAL.endMatching>();

              cfg.CreateMap<DAL.helper, DTO.Helper>();
              cfg.CreateMap<DTO.Helper, DAL.helper>();

              cfg.CreateMap<DAL.image, DTO.Image>();
              cfg.CreateMap<DTO.Image, DAL.image>();

              cfg.CreateMap<DAL.infoCandidate, DTO.InfoCandidate>();
              cfg.CreateMap<DTO.InfoCandidate, DAL.infoCandidate>();

              cfg.CreateMap<DAL.married, DTO.Married>();
              cfg.CreateMap<DTO.Married, DAL.married>();

              cfg.CreateMap<DAL.matching, DTO.Matching>();
              cfg.CreateMap<DTO.Matching, DAL.matching>();

              cfg.CreateMap<DAL.matchingHelper, DTO.MatchingHelper>();
              cfg.CreateMap<DTO.MatchingHelper, DAL.matchingHelper>();

              cfg.CreateMap<DAL.matchmaker, DTO.Matchmaker>();
              cfg.CreateMap<DTO.Matchmaker, DAL.matchmaker>();

              cfg.CreateMap<DAL.meeting, DTO.Meeting>();
              cfg.CreateMap<DTO.Meeting, DAL.meeting>();

              cfg.CreateMap<DAL.payment, DTO.Payment>();
              cfg.CreateMap<DTO.Payment, DAL.payment>();

              cfg.CreateMap<DAL.permssion, DTO.Permssion>();
              cfg.CreateMap<DTO.Permssion, DAL.permssion>();

              cfg.CreateMap<DAL.Present, DTO.Present>();
              cfg.CreateMap<DTO.Present, DAL.Present>();

              cfg.CreateMap<DAL.role, DTO.Role>();
              cfg.CreateMap<DTO.Role, DAL.role>();

              cfg.CreateMap<DAL.roleAction, DTO.RoleAction>();
              cfg.CreateMap<DTO.RoleAction, DAL.roleAction>();

              cfg.CreateMap<DAL.sector, DTO.Sector>();
              cfg.CreateMap<DTO.Sector, DAL.sector>();

              cfg.CreateMap<DAL.user, DTO.User>();
              cfg.CreateMap<DTO.User, DAL.user>();

              cfg.CreateMap<DAL.worker, DTO.Worker>();
              cfg.CreateMap<DTO.Worker, DAL.worker>();

              cfg.CreateMap<DAL.workerAction, DTO.WorkerAction>();
              cfg.CreateMap<DTO.WorkerAction, DAL.workerAction>();

              cfg.CreateMap<DAL.candidateFamily, DTO.CandidateFamily>();
              cfg.CreateMap<DTO.CandidateFamily, DAL.candidateFamily>();

              cfg.CreateMap<DAL.infoCandidate, DTO.InfoCandidate>();
              cfg.CreateMap<DTO.InfoCandidate, DAL.infoCandidate>();

          });

        private static IMapper _mapper = _conffiguration.CreateMapper();

        public static DTO.AskPermssion Convert(DAL.askPermssion dal)
        {
            return _mapper.Map<DTO.AskPermssion>(dal);
        }

        public static DAL.askPermssion Convert(DTO.AskPermssion dto)
        {
            return _mapper.Map<DAL.askPermssion>(dto);
        }

        public static DTO.Candidate Convert(DAL.candidate dal)
        {
            return _mapper.Map<DTO.Candidate>(dal);
        }

        public static DAL.candidate Convert(DTO.Candidate dto)
        {
            return _mapper.Map<DAL.candidate>(dto);
        }

        public static DTO.InfoCandidate Convert(DAL.infoCandidate dal)
        {
            return _mapper.Map<DTO.InfoCandidate>(dal);
        }

        public static DAL.infoCandidate Convert(DTO.InfoCandidate dto)
        {
            return _mapper.Map<DAL.infoCandidate>(dto);
        }

        public static List< DAL.askPermssion> Convert(List< DTO.AskPermssion> dto)
        {
            return _mapper.Map<List<DAL.askPermssion>>(dto);
        }

        public static List<DTO.AskPermssion> Convert(List<DAL.askPermssion> dto)
        {
            return _mapper.Map<List<DTO.AskPermssion>>(dto);
        }
        ////////////////////
        public static DTO.Bank Convert(DAL.bank dal)
        {
            return _mapper.Map<DTO.Bank>(dal);
        }

        public static DAL.bank Convert(DTO.Bank dto)
        {
            return _mapper.Map<DAL.bank>(dto);
        }

        public static List<DAL.candidate> Convert(List<DTO.Candidate> dto)
        {
            return _mapper.Map<List<DAL.candidate>>(dto);
        }

        public static List<DTO.Candidate> Convert(List<DAL.candidate> dto)
        {
            return _mapper.Map<List<DTO.Candidate>>(dto);
        }

        public static DTO.CandidateFamily Convert(DAL.candidateFamily dal)
        {
            return _mapper.Map<DTO.CandidateFamily>(dal);
        }

        public static DAL.candidateFamily Convert(DTO.CandidateFamily dto)
        {
            return _mapper.Map<DAL.candidateFamily>(dto);
        }
        /////////////
        public static DTO.CandidateComment Convert(DAL.candidateComment dal)
        {
            return _mapper.Map<DTO.CandidateComment>(dal);
        }

        public static DAL.candidateComment Convert(DTO.CandidateComment dto)
        {
            return _mapper.Map<DAL.candidateComment>(dto);
        }

        public static List<DAL.candidateComment> Convert(List<DTO.CandidateComment> dto)
        {
            return _mapper.Map<List<DAL.candidateComment>>(dto);
        }

        public static List<DTO.CandidateComment> Convert(List<DAL.candidateComment> dto)
        {
            return _mapper.Map<List<DTO.CandidateComment>>(dto);
        }
        /////////////////
        public static DTO.Chasidut Convert(DAL.chasidut dal)
        {
            return _mapper.Map<DTO.Chasidut>(dal);
        }

        public static DAL.chasidut Convert(DTO.Chasidut dto)
        {
            return _mapper.Map<DAL.chasidut>(dto);
        }

        public static List<DAL.chasidut> Convert(List<DTO.Chasidut> dto)
        {
            return _mapper.Map<List<DAL.chasidut>>(dto);
        }

        public static List<DTO.Chasidut> Convert(List<DAL.chasidut> dto)
        {
            return _mapper.Map<List<DTO.Chasidut>>(dto);
        }
        //////////////
        public static DTO.City Convert(DAL.city dal)
        {
            return _mapper.Map<DTO.City>(dal);
        }

        public static DAL.city Convert(DTO.City dto)
        {
            return _mapper.Map<DAL.city>(dto);
        }

        public static List<DAL.city> Convert(List<DTO.City> dto)
        {
            return _mapper.Map<List<DAL.city>>(dto);
        }

        public static List<DTO.City> Convert(List<DAL.city> dto)
        {
            return _mapper.Map<List<DTO.City>>(dto);
        }
        ////////////
        public static DTO.Contactus Convert(DAL.contactu dal)
        {
            return _mapper.Map<DTO.Contactus>(dal);
        }

        public static DAL.contactu Convert(DTO.Contactus dto)
        {
            return _mapper.Map<DAL.contactu>(dto);
        }

        public static List<DAL.contactu> Convert(List<DTO.Contactus> dto)
        {
            return _mapper.Map<List<DAL.contactu>>(dto);
        }

        public static List<DTO.Contactus> Convert(List<DAL.contactu> dto)
        {
            return _mapper.Map<List<DTO.Contactus>>(dto);
        }
        //////
        public static DTO.EndMatching Convert(DAL.endMatching dal)
        {
            return _mapper.Map<DTO.EndMatching>(dal);
        }

        public static DAL.endMatching Convert(DTO.EndMatching dto)
        {
            return _mapper.Map<DAL.endMatching>(dto);
        }

        public static List<DAL.endMatching> Convert(List<DTO.EndMatching> dto)
        {
            return _mapper.Map<List<DAL.endMatching>>(dto);
        }

        public static List<DTO.EndMatching> Convert(List<DAL.endMatching> dto)
        {
            return _mapper.Map<List<DTO.EndMatching>>(dto);
        }
        //////////////////
        public static DTO.Helper Convert(DAL.helper dal)
        {
            return _mapper.Map<DTO.Helper>(dal);
        }

        public static DAL.helper Convert(DTO.Helper dto)
        {
            return _mapper.Map<DAL.helper>(dto);
        }

        public static List<DAL.helper> Convert(List<DTO.Helper> dto)
        {
            return _mapper.Map<List<DAL.helper>>(dto);
        }

        public static List<DTO.Helper> Convert(List<DAL.helper> dto)
        {
            return _mapper.Map<List<DTO.Helper>>(dto);
        }
        /////////////////
        public static DTO.Image Convert(DAL.image dal)
        {
            return _mapper.Map<DTO.Image>(dal);
        }

        public static DAL.image Convert(DTO.Image dto)
        {
            return _mapper.Map<DAL.image>(dto);
        }

        public static List<DAL.image> Convert(List<DTO.Image> dto)
        {
            return _mapper.Map<List<DAL.image>>(dto);
        }

        public static List<DTO.Image> Convert(List<DAL.image> dto)
        {
            return _mapper.Map<List<DTO.Image>>(dto);
        }
        ///////////


        public static List<DAL.infoCandidate> Convert(List<DTO.InfoCandidate> dto)
        {
            return _mapper.Map<List<DAL.infoCandidate>>(dto);
        }

        public static List<DTO.InfoCandidate> Convert(List<DAL.infoCandidate> dto)
        {
            return _mapper.Map<List<DTO.InfoCandidate>>(dto);
        }
        //////////////
        public static DTO.Married Convert(DAL.married dal)
        {
            return _mapper.Map<DTO.Married>(dal);
        }

        public static DAL.married Convert(DTO.Married dto)
        {
            return _mapper.Map<DAL.married>(dto);
        }

        public static List<DAL.married> Convert(List<DTO.Married> dto)
        {
            return _mapper.Map<List<DAL.married>>(dto);
        }

        public static List<DTO.Married> Convert(List<DAL.married> dto)
        {
            return _mapper.Map<List<DTO.Married>>(dto);
        }
        ///////////////////////
        public static DTO.Matching Convert(DAL.matching dal)
        {
            return _mapper.Map<DTO.Matching>(dal);
        }

        public static DAL.matching Convert(DTO.Matching dto)
        {
            return _mapper.Map<DAL.matching>(dto);
        }

        public static List<DAL.matching> Convert(List<DTO.Matching> dto)
        {
            return _mapper.Map<List<DAL.matching>>(dto);
        }

        public static List<DTO.Matching> Convert(List<DAL.matching> dto)
        {
            return _mapper.Map<List<DTO.Matching>>(dto);
        }
        ///////////////////////
        public static DTO.MatchingHelper Convert(DAL.matchingHelper dal)
        {
            return _mapper.Map<DTO.MatchingHelper>(dal);
        }

        public static DAL.matchingHelper Convert(DTO.MatchingHelper dto)
        {
            return _mapper.Map<DAL.matchingHelper>(dto);
        }

        public static List<DAL.matchingHelper> Convert(List<DTO.MatchingHelper> dto)
        {
            return _mapper.Map<List<DAL.matchingHelper>>(dto);
        }

        public static List<DTO.MatchingHelper> Convert(List<DAL.matchingHelper> dto)
        {
            return _mapper.Map<List<DTO.MatchingHelper>>(dto);
        }
        ///////////////////////
        public static DTO.Matchmaker Convert(DAL.matchmaker dal)
        {
            return _mapper.Map<DTO.Matchmaker>(dal);
        }

        public static DAL.matchmaker Convert(DTO.Matchmaker dto)
        {
            return _mapper.Map<DAL.matchmaker>(dto);
        }

        public static List<DAL.matchmaker> Convert(List<DTO.Matchmaker> dto)
        {
            return _mapper.Map<List<DAL.matchmaker>>(dto);
        }

        public static List<DTO.Matchmaker> Convert(List<DAL.matchmaker> dto)
        {
            return _mapper.Map<List<DTO.Matchmaker>>(dto);
        }
        ///////////////////////
        public static DTO.Meeting Convert(DAL.meeting dal)
        {
            return _mapper.Map<DTO.Meeting>(dal);
        }

        public static DAL.meeting Convert(DTO.Meeting dto)
        {
            return _mapper.Map<DAL.meeting>(dto);
        }

        public static List<DAL.meeting> Convert(List<DTO.Meeting> dto)
        {
            return _mapper.Map<List<DAL.meeting>>(dto);
        }

        public static List<DTO.Meeting> Convert(List<DAL.meeting> dto)
        {
            return _mapper.Map<List<DTO.Meeting>>(dto);
        }
        ///////////////////////
        public static DTO.Payment Convert(DAL.payment dal)
        {
            return _mapper.Map<DTO.Payment>(dal);
        }

        public static DAL.payment Convert(DTO.Payment dto)
        {
            return _mapper.Map<DAL.payment>(dto);
        }

        public static List<DAL.payment> Convert(List<DTO.Payment> dto)
        {
            return _mapper.Map<List<DAL.payment>>(dto);
        }

        public static List<DTO.Payment> Convert(List<DAL.payment> dto)
        {
            return _mapper.Map<List<DTO.Payment>>(dto);
        }
        ///////////////////////
        public static DTO.Permssion Convert(DAL.permssion dal)
        {
            return _mapper.Map<DTO.Permssion>(dal);
        }

        public static DAL.permssion Convert(DTO.Permssion dto)
        {
            return _mapper.Map<DAL.permssion>(dto);
        }

        public static List<DAL.permssion> Convert(List<DTO.Permssion> dto)
        {
            return _mapper.Map<List<DAL.permssion>>(dto);
        }

        public static List<DTO.Permssion> Convert(List<DAL.permssion> dto)
        {
            return _mapper.Map<List<DTO.Permssion>>(dto);
        }
        ///////////////////////
        public static DTO.Present Convert(DAL.Present dal)
        {
            return _mapper.Map<DTO.Present>(dal);
        }

        public static DAL.Present Convert(DTO.Present dto)
        {
            return _mapper.Map<DAL.Present>(dto);
        }

        public static List<DAL.Present> Convert(List<DTO.Present> dto)
        {
            return _mapper.Map<List<DAL.Present>>(dto);
        }

        public static List<DTO.Present> Convert(List<DAL.Present> dto)
        {
            return _mapper.Map<List<DTO.Present>>(dto);
        }
        ///////////////////////
        public static DTO.Role Convert(DAL.role dal)
        {
            return _mapper.Map<DTO.Role>(dal);
        }

        public static DAL.role Convert(DTO.Role dto)
        {
            return _mapper.Map<DAL.role>(dto);
        }

        public static List<DAL.role> Convert(List<DTO.Role> dto)
        {
            return _mapper.Map<List<DAL.role>>(dto);
        }

        public static List<DTO.Role> Convert(List<DAL.role> dto)
        {
            return _mapper.Map<List<DTO.Role>>(dto);
        }
        ///////////////////////
        public static DTO.RoleAction Convert(DAL.roleAction dal)
        {
            return _mapper.Map<DTO.RoleAction>(dal);
        }

        public static DAL.roleAction Convert(DTO.RoleAction dto)
        {
            return _mapper.Map<DAL.roleAction>(dto);
        }

        public static List<DAL.roleAction> Convert(List<DTO.RoleAction> dto)
        {
            return _mapper.Map<List<DAL.roleAction>>(dto);
        }

        public static List<DTO.RoleAction> Convert(List<DAL.roleAction> dto)
        {
            return _mapper.Map<List<DTO.RoleAction>>(dto);
        }
        ///////////////////////
        public static DTO.Sector Convert(DAL.sector dal)
        {
            return _mapper.Map<DTO.Sector>(dal);
        }

        public static DAL.sector Convert(DTO.Sector dto)
        {
            return _mapper.Map<DAL.sector>(dto);
        }

        public static List<DAL.sector> Convert(List<DTO.Sector> dto)
        {
            return _mapper.Map<List<DAL.sector>>(dto);
        }

        public static List<DTO.Sector> Convert(List<DAL.sector> dto)
        {
            return _mapper.Map<List<DTO.Sector>>(dto);
        }

        ///////////////////////
        public static DTO.User Convert(DAL.user dal)
        {
            return _mapper.Map<DTO.User>(dal);
        }

        public static DAL.user Convert(DTO.User dto)
        {
            return _mapper.Map<DAL.user>(dto);
        }

        public static List<DAL.user> Convert(List<DTO.User> dto)
        {
            return _mapper.Map<List<DAL.user>>(dto);
        }

        public static List<DTO.User> Convert(List<DAL.user> dto)
        {
            return _mapper.Map<List<DTO.User>>(dto);
        }

        public static DTO.Worker Convert(DAL.worker dal)
        {
            return _mapper.Map<DTO.Worker>(dal);
        }

        public static DAL.worker Convert(DTO.Worker dto)
        {
            return _mapper.Map<DAL.worker>(dto);
        }

        public static List<DAL.worker> Convert(List<DTO.Worker> dto)
        {
            return _mapper.Map<List<DAL.worker>>(dto);
        }

        public static List<DTO.Worker> Convert(List<DAL.worker> dto)
        {
            return _mapper.Map<List<DTO.Worker>>(dto);
        }
        ///////////////////////
        public static DTO.WorkerAction Convert(DAL.workerAction dal)
        {
            return _mapper.Map<DTO.WorkerAction>(dal);
        }

        public static DAL.workerAction Convert(DTO.WorkerAction dto)
        {
            return _mapper.Map<DAL.workerAction>(dto);
        }

        public static List<DAL.workerAction> Convert(List<DTO.WorkerAction> dto)
        {
            return _mapper.Map<List<DAL.workerAction>>(dto);
        }

        public static List<DTO.WorkerAction> Convert(List<DAL.workerAction> dto)
        {
            return _mapper.Map<List<DTO.WorkerAction>>(dto);
        }

    }
}
