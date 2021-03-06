

GO
/****** Object:  Table [dbo].[askPermssion]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[askPermssion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[CreateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[PermssionId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_askpermssion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bank]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bank](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[BankNumber] [int] NOT NULL,
	[BranchName] [nvarchar](50) NULL,
	[BranchNumber] [int] NOT NULL,
	[AccountName] [nvarchar](50) NOT NULL,
	[AccountNumber] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_bank] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[candidate]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[candidate](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BornDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[IsPayFood] [bit] NULL,
	[Gender] [int] NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[MedicalProblem] [nvarchar](200) NULL,
	[NameFather] [nvarchar](20) NOT NULL,
	[NameMother] [nvarchar](20) NOT NULL,
	[FamilyMother] [nvarchar](20) NOT NULL,
	[NumChildren] [int] NOT NULL,
	[NumMarried] [int] NOT NULL,
	[NumMatching] [int] NULL,
	[FatherWork] [nvarchar](50) NOT NULL,
	[MotherWork] [nvarchar](50) NOT NULL,
	[CandidateWork] [nvarchar](50) NULL,
	[LastPlaceLearn] [int] NOT NULL,
	[Show] [nvarchar](200) NULL,
	[Clothes] [int] NOT NULL,
	[Tell] [nvarchar](10) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[Fax] [nvarchar](10) NULL,
	[Email] [nvarchar](50) NULL,
	[Remark] [nvarchar](200) NULL,
	[EnterBy] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CityId] [int] NOT NULL,
	[IsOk] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[SumPay] [int] NULL,
	[MatchmarkerId] [int] NULL,
	[SectorId] [int] NOT NULL,
	[ChasidutId] [int] NULL,
	[ChasidutMother] [int] NULL,
	[ChasidutFather] [int] NULL,
 CONSTRAINT [PK_candidate] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[candidateComment]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[candidateComment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Remark] [nvarchar](200) NOT NULL,
	[Privileged] [bit] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[WriteUserId] [int] NOT NULL,
	[CandidateId] [int] NOT NULL,
 CONSTRAINT [PK_comment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[chasidut]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chasidut](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_chasidut] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_city] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[contactus]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contactus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](20) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Message] [nvarchar](200) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_contactus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[endMatching]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[endMatching](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[IsPaid] [bit] NULL,
	[WhoPaid] [int] NULL,
	[Price] [decimal](18, 0) NULL,
	[Remark] [nvarchar](200) NULL,
	[IsCare] [bit] NOT NULL,
	[EndPlace] [nvarchar](50) NULL,
	[MatchingId] [int] NOT NULL,
 CONSTRAINT [PK_endmatching] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[helper]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[helper](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Type] [int] NOT NULL,
	[WorkerId] [int] NOT NULL,
	[CityId] [int] NOT NULL,
	[SectorId] [int] NOT NULL,
 CONSTRAINT [PK_helper] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[image]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[image](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Url] [nvarchar](200) NOT NULL,
	[CandidateId] [int] NOT NULL,
 CONSTRAINT [PK_image] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[infoCandidate]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[infoCandidate](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[ConnectLevel] [nvarchar](20) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[CandidateId] [int] NOT NULL,
 CONSTRAINT [PK_infocandidate] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[married]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[married](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[CandidateId] [int] NOT NULL,
	[CityId] [int] NOT NULL,
 CONSTRAINT [PK_married] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[matching]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[matching](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Createdate] [datetime] NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[Level] [int] NOT NULL,
	[ReasonFail] [nvarchar](200) NULL,
	[Precent] [int] NULL,
	[CandidateFailId] [int] NULL,
	[ReasonCandidateFail] [nvarchar](200) NULL,
	[ReasonCandidateFeFail] [nvarchar](200) NULL,
	[CandidateId] [int] NOT NULL,
	[CandidateFemaleId] [int] NOT NULL,
	[MatchmarkerId] [int] NOT NULL,
 CONSTRAINT [PK_matching] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[matchingComment]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[matchingComment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Remark] [nvarchar](200) NOT NULL,
	[Privileged] [bit] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[WriteUserId] [int] NOT NULL,
	[MatchingId] [int] NOT NULL,
 CONSTRAINT [PK_comment30] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[matchingHelper]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[matchingHelper](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Question] [nvarchar](200) NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[CreateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[IsPaid] [bit] NULL,
	[NumHour] [float] NULL,
	[Level] [int] NOT NULL,
	[Type] [int] NOT NULL,
	[MatchingId] [int] NOT NULL,
	[MatchmarkerId] [int] NOT NULL,
	[HelperId] [int] NULL,
 CONSTRAINT [PK_matchinghelper] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[matchmaker]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[matchmaker](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[MedicalProblem] [nvarchar](200) NULL,
	[ChasidutId] [int] NULL,
	[NumMatching] [int] NULL,
	[ChildremMatchmaking] [int] NULL,
	[HowSend] [int] NOT NULL,
	[IsCommitment] [bit] NOT NULL,
	[IsAgreement] [bit] NOT NULL,
	[Status] [int] NOT NULL,
	[CityId] [int] NOT NULL,
	[SectorId] [int] NOT NULL,
	[WorkerId] [int] NOT NULL,
 CONSTRAINT [PK_matchmaker] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[meeting]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[meeting](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DateMeeting] [datetime] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Place] [nvarchar](50) NOT NULL,
	[DuringTime] [time](7) NULL,
	[NumMeeting] [int] NULL,
	[Remark] [nvarchar](200) NULL,
	[MatchingId] [int] NOT NULL,
 CONSTRAINT [PK_meeting] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payment]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[FromMonth] [int] NOT NULL,
	[FromYear] [int] NOT NULL,
	[Sum] [decimal](18, 0) NOT NULL,
	[Bonus] [decimal](18, 0) NULL,
	[TotalPrice] [decimal](18, 0) NOT NULL,
	[Status] [int] NOT NULL,
	[WorkerId] [int] NOT NULL,
 CONSTRAINT [PK_payment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[permssion]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permssion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_permssion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Present]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Present](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EnterDate] [datetime] NOT NULL,
	[ExitDate] [datetime] NULL,
	[Remark] [nvarchar](200) NULL,
	[NumHours] [decimal](18, 0) NULL,
	[Subject] [nvarchar](50) NOT NULL,
	[WorkerId] [int] NOT NULL,
 CONSTRAINT [PK_present] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[role]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_role] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roleAction]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roleAction](
	[PermssionId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
	[Id] [int] NOT NULL,
 CONSTRAINT [PK_roleaction] PRIMARY KEY CLUSTERED 
(
	[PermssionId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sector]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sector](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_sector] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [nvarchar](20) NOT NULL,
	[Lastname] [nvarchar](20) NOT NULL,
	[Username] [nvarchar](20) NOT NULL,
	[PasswordHash] [varbinary](max) NOT NULL,
	[Tz] [nvarchar](10) NOT NULL,
	[PasswordSalt] [varbinary](max) NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[userRole]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userRole](
	[roleId] [int] NOT NULL,
	[userId] [int] NOT NULL,
 CONSTRAINT [PK_userRole_1] PRIMARY KEY CLUSTERED 
(
	[roleId] ASC,
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[worker]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[worker](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Experiance] [int] NULL,
	[BornDate] [datetime] NOT NULL,
	[Tell] [nvarchar](10) NOT NULL,
	[Phone] [nvarchar](10) NOT NULL,
	[Fax] [nvarchar](10) NULL,
	[Email] [nvarchar](50) NULL,
	[Remark] [nvarchar](200) NULL,
	[Gender] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[ConfidentComment] [nvarchar](200) NULL,
	[HourPrice] [decimal](18, 0) NULL,
	[MonthPrice] [decimal](18, 0) NULL,
	[NumHourWork] [float] NULL,
	[UserId] [int] NOT NULL,
	[BankId] [int] NULL,
 CONSTRAINT [PK_worker] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[workerAction]    Script Date: 09/11/2020 00:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[workerAction](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Subject] [nvarchar](50) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[Remark] [nvarchar](200) NULL,
	[WorkerId] [int] NOT NULL,
 CONSTRAINT [PK_workeraction] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[role] ON 

INSERT [dbo].[role] ([Id], [Name]) VALUES (1, N'Admin')
SET IDENTITY_INSERT [dbo].[role] OFF
GO
SET IDENTITY_INSERT [dbo].[user] ON 

INSERT [dbo].[user] ([Id], [Firstname], [Lastname], [Username], [PasswordHash], [Tz], [PasswordSalt]) VALUES (1, N'chaya', N'wachsstock', N'admin', 0x72150210031B8D15CE2E8F28F68D78A77E2BEF3737F01F2CDBF7B8A99074B1D0B822BDBEECB8B37851CD176D105E793C3F6BF7B7B30EF5A19A8A4FB51240EDBF, N'207322868', 0xF8386E2F08F29098362AD94809416AA03D62F575127A4976529D62BEFE3F7A60427300B211788300F29221C4ABF0E803DEF941BA10401A85EA97A62EC44D5E354766795600C7DEFC229FE770F71F66D1F7891929D293DA52DBE0FA928FA4EA7DC5B3A38E4CA58EBD3A92F9BBDF125B6748971D67C712D3017E7066245AD554B5)
SET IDENTITY_INSERT [dbo].[user] OFF
GO
INSERT [dbo].[userRole] ([roleId], [userId]) VALUES (1, 1)
GO
/****** Object:  Index [fkIdx_85]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_85] ON [dbo].[askPermssion]
(
	[PermssionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_90]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_90] ON [dbo].[askPermssion]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_142]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_142] ON [dbo].[candidate]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_145]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_145] ON [dbo].[candidate]
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_167]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_167] ON [dbo].[candidate]
(
	[MatchmarkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_174]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_174] ON [dbo].[candidate]
(
	[SectorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_184]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_184] ON [dbo].[candidate]
(
	[ChasidutId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_187]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_187] ON [dbo].[candidate]
(
	[ChasidutMother] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_190]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_190] ON [dbo].[candidate]
(
	[ChasidutFather] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_202]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_202] ON [dbo].[candidateComment]
(
	[WriteUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_205]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_205] ON [dbo].[candidateComment]
(
	[CandidateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_237]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_237] ON [dbo].[contactus]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_370]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_370] ON [dbo].[endMatching]
(
	[MatchingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_313]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_313] ON [dbo].[helper]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_316]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_316] ON [dbo].[helper]
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_319]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_319] ON [dbo].[helper]
(
	[SectorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_139]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_139] ON [dbo].[image]
(
	[CandidateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_224]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_224] ON [dbo].[infoCandidate]
(
	[CandidateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_157]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_157] ON [dbo].[married]
(
	[CandidateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_160]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_160] ON [dbo].[married]
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_253]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_253] ON [dbo].[matching]
(
	[CandidateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_256]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_256] ON [dbo].[matching]
(
	[CandidateFemaleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_332]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_332] ON [dbo].[matching]
(
	[MatchmarkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_202]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_202] ON [dbo].[matchingComment]
(
	[WriteUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_259]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_259] ON [dbo].[matchingComment]
(
	[MatchingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_350]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_350] ON [dbo].[matchingHelper]
(
	[MatchingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_353]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_353] ON [dbo].[matchingHelper]
(
	[MatchmarkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_356]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_356] ON [dbo].[matchingHelper]
(
	[HelperId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_102]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_102] ON [dbo].[matchmaker]
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_177]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_177] ON [dbo].[matchmaker]
(
	[SectorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_296]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_296] ON [dbo].[matchmaker]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_335]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_335] ON [dbo].[meeting]
(
	[MatchingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_395]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_395] ON [dbo].[payment]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_293]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_293] ON [dbo].[Present]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_48]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_48] ON [dbo].[roleAction]
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_51]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_51] ON [dbo].[roleAction]
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_290]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_290] ON [dbo].[worker]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_382]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_382] ON [dbo].[worker]
(
	[BankId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fkIdx_305]    Script Date: 09/11/2020 00:13:04 ******/
CREATE NONCLUSTERED INDEX [fkIdx_305] ON [dbo].[workerAction]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[askPermssion]  WITH CHECK ADD  CONSTRAINT [FK_85] FOREIGN KEY([PermssionId])
REFERENCES [dbo].[permssion] ([Id])
GO
ALTER TABLE [dbo].[askPermssion] CHECK CONSTRAINT [FK_85]
GO
ALTER TABLE [dbo].[askPermssion]  WITH CHECK ADD  CONSTRAINT [FK_90] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[askPermssion] CHECK CONSTRAINT [FK_90]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_142] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_142]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_145] FOREIGN KEY([CityId])
REFERENCES [dbo].[city] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_145]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_174] FOREIGN KEY([SectorId])
REFERENCES [dbo].[sector] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_174]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_184] FOREIGN KEY([ChasidutId])
REFERENCES [dbo].[chasidut] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_184]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_187] FOREIGN KEY([ChasidutMother])
REFERENCES [dbo].[chasidut] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_187]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [FK_190] FOREIGN KEY([ChasidutFather])
REFERENCES [dbo].[chasidut] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [FK_190]
GO
ALTER TABLE [dbo].[candidate]  WITH CHECK ADD  CONSTRAINT [MatchmarkerId] FOREIGN KEY([MatchmarkerId])
REFERENCES [dbo].[matchmaker] ([Id])
GO
ALTER TABLE [dbo].[candidate] CHECK CONSTRAINT [MatchmarkerId]
GO
ALTER TABLE [dbo].[candidateComment]  WITH CHECK ADD  CONSTRAINT [FK_202] FOREIGN KEY([WriteUserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[candidateComment] CHECK CONSTRAINT [FK_202]
GO
ALTER TABLE [dbo].[candidateComment]  WITH CHECK ADD  CONSTRAINT [FK_205] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[candidateComment] CHECK CONSTRAINT [FK_205]
GO
ALTER TABLE [dbo].[contactus]  WITH CHECK ADD  CONSTRAINT [FK_237] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[contactus] CHECK CONSTRAINT [FK_237]
GO
ALTER TABLE [dbo].[endMatching]  WITH CHECK ADD  CONSTRAINT [FK_370] FOREIGN KEY([MatchingId])
REFERENCES [dbo].[matching] ([Id])
GO
ALTER TABLE [dbo].[endMatching] CHECK CONSTRAINT [FK_370]
GO
ALTER TABLE [dbo].[helper]  WITH CHECK ADD  CONSTRAINT [FK_313] FOREIGN KEY([WorkerId])
REFERENCES [dbo].[worker] ([Id])
GO
ALTER TABLE [dbo].[helper] CHECK CONSTRAINT [FK_313]
GO
ALTER TABLE [dbo].[helper]  WITH CHECK ADD  CONSTRAINT [FK_316] FOREIGN KEY([CityId])
REFERENCES [dbo].[city] ([Id])
GO
ALTER TABLE [dbo].[helper] CHECK CONSTRAINT [FK_316]
GO
ALTER TABLE [dbo].[helper]  WITH CHECK ADD  CONSTRAINT [FK_319] FOREIGN KEY([SectorId])
REFERENCES [dbo].[sector] ([Id])
GO
ALTER TABLE [dbo].[helper] CHECK CONSTRAINT [FK_319]
GO
ALTER TABLE [dbo].[image]  WITH CHECK ADD  CONSTRAINT [FK_139] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[image] CHECK CONSTRAINT [FK_139]
GO
ALTER TABLE [dbo].[infoCandidate]  WITH CHECK ADD  CONSTRAINT [FK_224] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[infoCandidate] CHECK CONSTRAINT [FK_224]
GO
ALTER TABLE [dbo].[married]  WITH CHECK ADD  CONSTRAINT [FK_157] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[married] CHECK CONSTRAINT [FK_157]
GO
ALTER TABLE [dbo].[married]  WITH CHECK ADD  CONSTRAINT [FK_160] FOREIGN KEY([CityId])
REFERENCES [dbo].[city] ([Id])
GO
ALTER TABLE [dbo].[married] CHECK CONSTRAINT [FK_160]
GO
ALTER TABLE [dbo].[matching]  WITH CHECK ADD  CONSTRAINT [FK_253] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[matching] CHECK CONSTRAINT [FK_253]
GO
ALTER TABLE [dbo].[matching]  WITH CHECK ADD  CONSTRAINT [FK_256] FOREIGN KEY([CandidateFemaleId])
REFERENCES [dbo].[candidate] ([Id])
GO
ALTER TABLE [dbo].[matching] CHECK CONSTRAINT [FK_256]
GO
ALTER TABLE [dbo].[matching]  WITH CHECK ADD  CONSTRAINT [FK_332] FOREIGN KEY([MatchmarkerId])
REFERENCES [dbo].[matchmaker] ([Id])
GO
ALTER TABLE [dbo].[matching] CHECK CONSTRAINT [FK_332]
GO
ALTER TABLE [dbo].[matchingComment]  WITH CHECK ADD  CONSTRAINT [FK_2050] FOREIGN KEY([WriteUserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[matchingComment] CHECK CONSTRAINT [FK_2050]
GO
ALTER TABLE [dbo].[matchingComment]  WITH CHECK ADD  CONSTRAINT [FK_2580] FOREIGN KEY([MatchingId])
REFERENCES [dbo].[matching] ([Id])
GO
ALTER TABLE [dbo].[matchingComment] CHECK CONSTRAINT [FK_2580]
GO
ALTER TABLE [dbo].[matchingHelper]  WITH CHECK ADD  CONSTRAINT [FK_350] FOREIGN KEY([MatchingId])
REFERENCES [dbo].[matching] ([Id])
GO
ALTER TABLE [dbo].[matchingHelper] CHECK CONSTRAINT [FK_350]
GO
ALTER TABLE [dbo].[matchingHelper]  WITH CHECK ADD  CONSTRAINT [FK_353] FOREIGN KEY([MatchmarkerId])
REFERENCES [dbo].[matchmaker] ([Id])
GO
ALTER TABLE [dbo].[matchingHelper] CHECK CONSTRAINT [FK_353]
GO
ALTER TABLE [dbo].[matchingHelper]  WITH CHECK ADD  CONSTRAINT [FK_356] FOREIGN KEY([HelperId])
REFERENCES [dbo].[helper] ([Id])
GO
ALTER TABLE [dbo].[matchingHelper] CHECK CONSTRAINT [FK_356]
GO
ALTER TABLE [dbo].[matchmaker]  WITH CHECK ADD  CONSTRAINT [FK_102] FOREIGN KEY([CityId])
REFERENCES [dbo].[city] ([Id])
GO
ALTER TABLE [dbo].[matchmaker] CHECK CONSTRAINT [FK_102]
GO
ALTER TABLE [dbo].[matchmaker]  WITH CHECK ADD  CONSTRAINT [FK_177] FOREIGN KEY([SectorId])
REFERENCES [dbo].[sector] ([Id])
GO
ALTER TABLE [dbo].[matchmaker] CHECK CONSTRAINT [FK_177]
GO
ALTER TABLE [dbo].[matchmaker]  WITH CHECK ADD  CONSTRAINT [FK_296] FOREIGN KEY([WorkerId])
REFERENCES [dbo].[worker] ([Id])
GO
ALTER TABLE [dbo].[matchmaker] CHECK CONSTRAINT [FK_296]
GO
ALTER TABLE [dbo].[meeting]  WITH CHECK ADD  CONSTRAINT [FK_335] FOREIGN KEY([MatchingId])
REFERENCES [dbo].[matching] ([Id])
GO
ALTER TABLE [dbo].[meeting] CHECK CONSTRAINT [FK_335]
GO
ALTER TABLE [dbo].[payment]  WITH CHECK ADD  CONSTRAINT [FK_395] FOREIGN KEY([WorkerId])
REFERENCES [dbo].[worker] ([Id])
GO
ALTER TABLE [dbo].[payment] CHECK CONSTRAINT [FK_395]
GO
ALTER TABLE [dbo].[Present]  WITH CHECK ADD  CONSTRAINT [FK_293] FOREIGN KEY([WorkerId])
REFERENCES [dbo].[worker] ([Id])
GO
ALTER TABLE [dbo].[Present] CHECK CONSTRAINT [FK_293]
GO
ALTER TABLE [dbo].[roleAction]  WITH CHECK ADD  CONSTRAINT [FK_48] FOREIGN KEY([Id])
REFERENCES [dbo].[role] ([Id])
GO
ALTER TABLE [dbo].[roleAction] CHECK CONSTRAINT [FK_48]
GO
ALTER TABLE [dbo].[roleAction]  WITH CHECK ADD  CONSTRAINT [FK_51] FOREIGN KEY([Id])
REFERENCES [dbo].[permssion] ([Id])
GO
ALTER TABLE [dbo].[roleAction] CHECK CONSTRAINT [FK_51]
GO
ALTER TABLE [dbo].[userRole]  WITH CHECK ADD  CONSTRAINT [FK_userRole_role] FOREIGN KEY([roleId])
REFERENCES [dbo].[role] ([Id])
GO
ALTER TABLE [dbo].[userRole] CHECK CONSTRAINT [FK_userRole_role]
GO
ALTER TABLE [dbo].[userRole]  WITH CHECK ADD  CONSTRAINT [FK_userRole_user] FOREIGN KEY([userId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[userRole] CHECK CONSTRAINT [FK_userRole_user]
GO
ALTER TABLE [dbo].[worker]  WITH CHECK ADD  CONSTRAINT [FK_290] FOREIGN KEY([UserId])
REFERENCES [dbo].[user] ([Id])
GO
ALTER TABLE [dbo].[worker] CHECK CONSTRAINT [FK_290]
GO
ALTER TABLE [dbo].[worker]  WITH CHECK ADD  CONSTRAINT [FK_382] FOREIGN KEY([BankId])
REFERENCES [dbo].[bank] ([Id])
GO
ALTER TABLE [dbo].[worker] CHECK CONSTRAINT [FK_382]
GO
ALTER TABLE [dbo].[workerAction]  WITH CHECK ADD  CONSTRAINT [FK_305] FOREIGN KEY([WorkerId])
REFERENCES [dbo].[worker] ([Id])
GO
ALTER TABLE [dbo].[workerAction] CHECK CONSTRAINT [FK_305]
GO
USE [master]
GO
ALTER DATABASE [MazalTov] SET  READ_WRITE 
GO
