import { APP_ENDPOINT } from "../../../constant";

export function job_sharer_content(page, user, detail) {
  switch (user) {
    case "COLLEGE":
      switch (page) {
        case "RECOMMENDED":
        case "AVAILABLE":
          return {
            url: `${APP_ENDPOINT}/public/job/${detail.job_id}`,
            whatsapp: {
              title: `*${detail.company_name} || Virtual/Online Campus Drive* \n Dear All, ${detail.company_name} is conducting online campus drive in our college to hire students for ${detail.job_role} position for a ${detail.job_type} role. CTC/Stipend: ${detail.ctc_min} - ${detail.ctc_max} ${detail.payment_type} \n Last Date to Apply: ${detail.apply_end_date} \n Apply Here `,
            },
            linkedin: {
              title: `*${detail.company_name} || Virtual/Online Campus Drive* \n Dear All, ${detail.company_name} is conducting online campus drive in our college to hire students for ${detail.job_role} position for a ${detail.job_type} role. CTC/Stipend: ${detail.ctc_min} - ${detail.ctc_max} ${detail.payment_type} \n Last Date to Apply: ${detail.apply_end_date} \n Apply Here `,
              summary: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
            },
            telegram: {
              title: `*${detail.company_name} || Virtual/Online Campus Drive* \n Dear All, ${detail.company_name} is conducting online campus drive in our college to hire students for ${detail.job_role} position for a ${detail.job_type} role. CTC/Stipend: ${detail.ctc_min} - ${detail.ctc_max} ${detail.payment_type} \n Last Date to Apply: ${detail.apply_end_date} \n Apply Here `,
            },
            email: {
              body: `*${detail.company_name} || Virtual/Online Campus Drive* \n Dear All, ${detail.company_name} is conducting online campus drive in our college to hire students for ${detail.job_role} position for a ${detail.job_type} role. CTC/Stipend: ${detail.ctc_min} - ${detail.ctc_max} ${detail.payment_type} \n Last Date to Apply: ${detail.apply_end_date} \n Apply Here `,
              subject: `*${detail.company_name} || Virtual/Online Campus Drive*`,
            },
            facebook: {
              hashtag: detail.job_title,
              quote: `*${detail.company_name} || Virtual/Online Campus Drive* \n Dear All, ${detail.company_name} is conducting online campus drive in our college to hire students for ${detail.job_role} position for a ${detail.job_type} role. CTC/Stipend: ${detail.ctc_min} - ${detail.ctc_max} ${detail.payment_type} \n Last Date to Apply: ${detail.apply_end_date} \n Apply Here `,
            },
          };
        case "SHARE_TRACK":
          return {
            url: `${detail.url}`,
            whatsapp: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile}  \n Passcode for the below link:${detail.passcode}\n`,
            },
            linkedin: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
              summary: `Track Applicants using link and passcode - ${detail.user}`,
            },
            telegram: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
            },
            email: {
              body: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
              subject: `Track Applicants using link and passcode - ${detail.user}`,
            },
            facebook: {
              hashtag: detail.user,
              quote: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
            },
          };
        default:
          return {
            url: `${APP_ENDPOINT}/public/job/${detail.job_id}`,
            whatsapp: {
              title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
            linkedin: {
              title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
              summary: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
            },
            telegram: {
              title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
            email: {
              body: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
              subject: `*${detail.company_name} || Virtual/Online Campus Drive*`,
            },
            facebook: {
              hashtag: detail.job_title,
              quote: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
          };
      }
    case "COMPANY":
      switch (page) {
        case "SHARE_TRACK":
          return {
            url: `${detail.url}`,
            whatsapp: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile}  \n Passcode for the below link:${detail.passcode}\n`,
            },
            linkedin: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
              summary: `Track Applicants using link and passcode - ${detail.user}`,
            },
            telegram: {
              title: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
            },
            email: {
              body: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
              subject: `Track Applicants using link and passcode - ${detail.user}`,
            },
            facebook: {
              hashtag: detail.user,
              quote: `Hi, Please use below link and passcode to access the applicant tracking for ${detail.user}, ${detail.jobProfile} \n Link:${detail.url} \n Passcode:${detail.passcode}`,
            },
          };
        default:
          return {
            url: `${APP_ENDPOINT}/public/job/${detail.job_id}`,
            whatsapp: {
              title: `Hey, We, *${detail.company_name}*, are hiring for *${detail.job_role}* position for *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
            linkedin: {
              title: `Hey, We, *${detail.company_name}*, are hiring for *${detail.job_role}* position for *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
              summary: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
            },
            telegram: {
              title: `Hey, We, *${detail.company_name}*, are hiring for *${detail.job_role}* position for *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
            email: {
              body: `Hey, We, *${detail.company_name}*, are hiring for *${detail.job_role}* position for *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
              subject: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
            },
            facebook: {
              hashtag: detail.job_title,
              quote: `Hey, We, *${detail.company_name}*, are hiring for *${detail.job_role}* position for *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
            },
          };
      }
    default:
      return {
        url: `${APP_ENDPOINT}/public/job/${detail.job_id}`,
        whatsapp: {
          title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
        },
        linkedin: {
          title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
          summary: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
        },
        telegram: {
          title: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
        },
        email: {
          body: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
          subject: `*${detail.company_name}* || Virtual/Online Campus Drive*`,
        },
        facebook: {
          hashtag: detail.job_title,
          quote: `Hey, I just found out *${detail.company_name}* is hiring for *${detail.job_role}* position for a *${detail.job_type}* role. I thought you might be interested. \n  Here's the link to apply `,
        },
      };
  }
}
