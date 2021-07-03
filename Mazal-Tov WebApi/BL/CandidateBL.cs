
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace BL
{
    public class CandidateBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static Candidate RegisterCandidate(Candidate candidate)
        {
            using (TransactionScope transaction = new TransactionScope())
            {
                try
                {
                    candidate.CreateDate = DateTime.Now;
                    candidate.UpdateDate = DateTime.Now;
                    var candidateDB = Converters.Convert(candidate);
                    var canInfo = candidateDB.infoCandidates;
                    var canFamily = candidateDB.candidateFamilies;
                    var marrieds = candidateDB.marrieds;
                    var user = candidateDB.user;
                    var entryBy = candidateDB.user1;
                    candidateDB.infoCandidates = null;
                    candidateDB.candidateFamilies = null;
                    candidateDB.marrieds = null;
                    candidateDB.user = null;
                    candidateDB.EntryByUser = null;
                    candidateDB.chasidut = null;
                    if(candidateDB.ChasidutId == 0)
                      candidateDB.ChasidutId = null;
                    if (candidateDB.MatchmarkerId == 0)
                    {
                        candidateDB.MatchmarkerId = null;
                        candidateDB.matchmaker = null;
                    }
                    user.IsOk = true;
                    var userIns=db.users.Add(user);
                    db.SaveChanges();
                    candidateDB.UserId = userIns.Id;
                    var candidateInter = db.candidates.Add(candidateDB);
                    db.SaveChanges();
                    //if(entryBy!=null)
                    //{
                    //    db.users.Add(entryBy);
                    //    db.SaveChanges();
                    //}
                    if (canInfo != null)
                        foreach (var item in canInfo)
                        {
                            item.CandidateId = candidateInter.Id;
                            db.infoCandidates.Add(item);
                            db.SaveChanges();
                        }
                    if (canFamily != null)
                        foreach (var item in canFamily)
                        {
                            item.CandidateId = candidateInter.Id;
                            item.CreationDate = DateTime.Now;
                            db.candidateFamilies.Add(item);
                            db.SaveChanges();
                        }
                    if (marrieds != null)
                        foreach (var item in marrieds)
                        {
                            item.CandidateId = candidateInter.Id;
                            db.marrieds.Add(item);
                            db.SaveChanges();
                        }
                    transaction.Complete();
                    return Converters.Convert(candidateInter);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }

        public static List<Candidate> GetAllCandidate()
        {
            List<DTO.Candidate> AllCandidate = new List<Candidate>();
            foreach (var item in db.candidates)
            {
                AllCandidate.Add(Converters.Convert(item));
            }
            return AllCandidate;
        }

        public static List<Candidate> CandidatesPersonalCare(int IdMatchmaker)
        {
            List<DTO.Candidate> AllCandidate = new List<Candidate>();
            List<DTO.Candidate> CandidatesPersonalCare = new List<Candidate>();

            foreach (var item in db.candidates)
            {
                //{if(item.matchings.candidateid==)
                AllCandidate.Add(Converters.Convert(item));
            }


            foreach (var item in AllCandidate)
            {
                Random rnd = new Random();
                int num = rnd.Next(AllCandidate.Count);
                CandidatesPersonalCare.Add(AllCandidate[num]);
                AllCandidate[num].Status = 1;
            }

            return AllCandidate;
        }


        public static List<Candidate> GetAllSearchCandidate(Candidate candidate)
        {
            List<DTO.Candidate> list = new List<Candidate>();
            foreach (var item in db.candidates)
            {
                list.Add(Converters.Convert(item));
            }

            if (candidate.SectorId != null)
                list = list.Where(r => r.SectorId == candidate.SectorId).ToList();
            if (candidate.Gender != null)
                list = list.Where(r => r.Gender == candidate.Gender).ToList();
            if (candidate.Status != null)
                list = list.Where(r => r.Status == candidate.Status).ToList();
            if (candidate.Clothes != null)
                list = list.Where(r => r.Clothes == candidate.Clothes).ToList();
            if (candidate.MedicalProblem != null)
                list = list.Where(r => r.MedicalProblem == candidate.MedicalProblem).ToList();
            if (candidate.WhoMoneyAnother != null)
                list = list.Where(r => r.WhoMoneyAnother <= candidate.WhoMoneyAnother).ToList();
            if (candidate.WhoMoneyGive != null)
                list = list.Where(r => r.WhoMoneyGive <= candidate.WhoMoneyGive).ToList();
            if (candidate.Heigth != null)
                list = list.Where(r => r.Heigth <= candidate.Heigth).ToList();

            return list;
        }
    }

}




//if (candidate.CityId != null && SearchDate2 != null)
//    list = list.Where(r => r.Date.Value.Date >= SearchDate1.Date && r.Date.Value.Date <= SearchDate2.Date).ToList();
//if (SearchDate1 != null && SearchDate2 == null)
//    list = list.Where(r => r.Date >= SearchDate1).ToList();
//if (SearchDate2 != null && SearchDate1 == null)
//    list = list.Where(r => r.Date <= SearchDate2).ToList();