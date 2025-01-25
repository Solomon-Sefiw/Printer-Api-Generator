import { emptySplitApi as api } from "./emptySplitApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createAddress: build.mutation<
      CreateAddressApiResponse,
      CreateAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/create`,
        method: "POST",
        body: queryArg.createAddressCommand,
      }),
    }),
    getAddressByRequestId: build.query<
      GetAddressByRequestIdApiResponse,
      GetAddressByRequestIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/GetAddressbyId`,
        params: {
          requestId: queryArg.requestId,
          addressType: queryArg.addressType,
        },
      }),
    }),
    getAddressQueryByEntityType: build.query<
      GetAddressQueryByEntityTypeApiResponse,
      GetAddressQueryByEntityTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/GetAddressQueryByEntityType`,
        params: {
          entityId: queryArg.entityId,
        },
      }),
    }),
    getEmployeeFamilyAddressById: build.query<
      GetEmployeeFamilyAddressByIdApiResponse,
      GetEmployeeFamilyAddressByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/GetEmployeeFamilyAddressById`,
        params: {
          addressId: queryArg.addressId,
        },
      }),
    }),
    getGuaranterAddress: build.query<
      GetGuaranterAddressApiResponse,
      GetGuaranterAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/GetGuaranterAddressQuery`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    getGuaranterWorkingFirmAddress: build.query<
      GetGuaranterWorkingFirmAddressApiResponse,
      GetGuaranterWorkingFirmAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/GetGuaranterWorkingFirmAddressQuery`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    updateAddressByRequestId: build.mutation<
      UpdateAddressByRequestIdApiResponse,
      UpdateAddressByRequestIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Address/update`,
        method: "PUT",
        body: queryArg.updateAddressCommand,
      }),
    }),
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/api/Authentication/login`,
        method: "POST",
        body: queryArg.userLogin,
        params: {
          returnUrl: queryArg.returnUrl,
        },
      }),
    }),
    registerUser: build.mutation<RegisterUserApiResponse, RegisterUserApiArg>({
      query: (queryArg) => ({
        url: `/api/Authentication/RegisterUser`,
        method: "POST",
        body: queryArg.userRegisterDto,
      }),
    }),
    verificationCode: build.mutation<
      VerificationCodeApiResponse,
      VerificationCodeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Authentication/verification-code`,
        method: "POST",
        body: queryArg.verificationCode,
      }),
    }),
    activateBusinessUnit: build.mutation<
      ActivateBusinessUnitApiResponse,
      ActivateBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/activate`,
        method: "PATCH",
        body: queryArg.activateBusinessUnitCommand,
      }),
    }),
    getAllBusinessUnits: build.query<
      GetAllBusinessUnitsApiResponse,
      GetAllBusinessUnitsApiArg
    >({
      query: () => ({ url: `/api/BusinessUnit/all` }),
    }),
    getAllBuisnessUnitLists: build.query<
      GetAllBuisnessUnitListsApiResponse,
      GetAllBuisnessUnitListsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/allBusinessUnit`,
        params: {
          status: queryArg.status,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    approveBusinessUnit: build.mutation<
      ApproveBusinessUnitApiResponse,
      ApproveBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/approve`,
        method: "PATCH",
        body: queryArg.approveBusinessUnitCommand,
      }),
    }),
    closeBusinessUnit: build.mutation<
      CloseBusinessUnitApiResponse,
      CloseBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/close`,
        method: "PATCH",
        body: queryArg.closeBusinessUnitCommand,
      }),
    }),
    getBusinessUnitCountPerApprovalStatus: build.query<
      GetBusinessUnitCountPerApprovalStatusApiResponse,
      GetBusinessUnitCountPerApprovalStatusApiArg
    >({
      query: () => ({ url: `/api/BusinessUnit/counts` }),
    }),
    createBusinessUnit: build.mutation<
      CreateBusinessUnitApiResponse,
      CreateBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/CreateBusinessUnit`,
        method: "POST",
        body: queryArg.createBusinessUnitCommand,
      }),
    }),
    rejectBusinessUnit: build.mutation<
      RejectBusinessUnitApiResponse,
      RejectBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/Reject`,
        method: "PATCH",
        body: queryArg.rejectBusinessUnitCommand,
      }),
    }),
    searchAllBusinessUnits: build.query<
      SearchAllBusinessUnitsApiResponse,
      SearchAllBusinessUnitsApiArg
    >({
      query: () => ({ url: `/api/BusinessUnit/search` }),
    }),
    searchBusinessUnits: build.query<
      SearchBusinessUnitsApiResponse,
      SearchBusinessUnitsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/SearchBusinessUnits`,
        params: {
          query: queryArg.query,
        },
      }),
    }),
    submitBusinessUnit: build.mutation<
      SubmitBusinessUnitApiResponse,
      SubmitBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/submit`,
        method: "PATCH",
        body: queryArg.submitBusinessUnitCommand,
      }),
    }),
    updateBusinessUnit: build.mutation<
      UpdateBusinessUnitApiResponse,
      UpdateBusinessUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/BusinessUnit/update`,
        method: "PUT",
        body: queryArg.updateBusinessUnitCommand,
      }),
    }),
    getContactsById: build.query<
      GetContactsByIdApiResponse,
      GetContactsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/contacts`,
        params: {
          requestId: queryArg.requestId,
          contactCategory: queryArg.contactCategory,
        },
      }),
    }),
    createContact: build.mutation<
      CreateContactApiResponse,
      CreateContactApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/Create`,
        method: "POST",
        body: queryArg.createContactCommand,
      }),
    }),
    getContactByRequestId: build.query<
      GetContactByRequestIdApiResponse,
      GetContactByRequestIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/GetContactByRequestId`,
        params: {
          requestId: queryArg.requestId,
          contactCategory: queryArg.contactCategory,
          type: queryArg["type"],
        },
      }),
    }),
    getContactOfGuarater: build.query<
      GetContactOfGuaraterApiResponse,
      GetContactOfGuaraterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/GetContactOfGuarater`,
        params: {
          contactId: queryArg.contactId,
        },
      }),
    }),
    getContactOfGuaraterWorkingFirm: build.query<
      GetContactOfGuaraterWorkingFirmApiResponse,
      GetContactOfGuaraterWorkingFirmApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/GetContactOfGuaraterWorkingFirm`,
        params: {
          contactId: queryArg.contactId,
        },
      }),
    }),
    getContactsByEntity: build.query<
      GetContactsByEntityApiResponse,
      GetContactsByEntityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/GetContactsByEntity`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    getEmployeeFamilyContactById: build.query<
      GetEmployeeFamilyContactByIdApiResponse,
      GetEmployeeFamilyContactByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/GetEmployeeFamilyContact`,
        params: {
          contactId: queryArg.contactId,
          contactCategory: queryArg.contactCategory,
        },
      }),
    }),
    updateContactByRequestId: build.mutation<
      UpdateContactByRequestIdApiResponse,
      UpdateContactByRequestIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Contact/update`,
        method: "PUT",
        body: queryArg.updateContactCommand,
      }),
    }),
    getApiDocumentsById: build.query<
      GetApiDocumentsByIdApiResponse,
      GetApiDocumentsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/Documents/${queryArg.id}` }),
    }),
    downloadDocument: build.query<
      DownloadDocumentApiResponse,
      DownloadDocumentApiArg
    >({
      query: (queryArg) => ({ url: `/api/Documents/${queryArg.id}/download` }),
    }),
    documentRootPath: build.query<
      DocumentRootPathApiResponse,
      DocumentRootPathApiArg
    >({
      query: () => ({ url: `/api/Documents/root-path` }),
    }),
    createEducation: build.mutation<
      CreateEducationApiResponse,
      CreateEducationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Education/create`,
        method: "POST",
        body: queryArg.createEducationCommand,
      }),
    }),
    getEducationById: build.query<
      GetEducationByIdApiResponse,
      GetEducationByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Education/GetEducationById`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    updateEducation: build.mutation<
      UpdateEducationApiResponse,
      UpdateEducationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Education/update`,
        method: "PUT",
        body: queryArg.updateEducationCommand,
      }),
    }),
    addEmployeeExperience: build.mutation<
      AddEmployeeExperienceApiResponse,
      AddEmployeeExperienceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/AddEmployeeExperience`,
        method: "POST",
        body: queryArg.addEmployeeExperienceCommand,
      }),
    }),
    addEmployeeChildren: build.mutation<
      AddEmployeeChildrenApiResponse,
      AddEmployeeChildrenApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/AddEmployeeFamily`,
        method: "POST",
        body: queryArg.addEmployeeFamilyCommand,
      }),
    }),
    addEmployeeGuranters: build.mutation<
      AddEmployeeGurantersApiResponse,
      AddEmployeeGurantersApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/AddEmployeeGuranters`,
        method: "POST",
        body: queryArg.addEmployeeGurantersCommand,
      }),
    }),
    allFamilyOfAllEmployee: build.query<
      AllFamilyOfAllEmployeeApiResponse,
      AllFamilyOfAllEmployeeApiArg
    >({
      query: () => ({ url: `/api/EmployeeFamily/AllFamilyOfAllEmployee` }),
    }),
    getFamily: build.query<GetFamilyApiResponse, GetFamilyApiArg>({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetChild`,
        params: {
          familyId: queryArg.familyId,
        },
      }),
    }),
    getEmployeeExperienceById: build.query<
      GetEmployeeExperienceByIdApiResponse,
      GetEmployeeExperienceByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetEmployeeExperienceById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    getEmployeeExperienceListOfEmployee: build.query<
      GetEmployeeExperienceListOfEmployeeApiResponse,
      GetEmployeeExperienceListOfEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetEmployeeExperienceListOfEmployee`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    getEmployeeGuaranterEmployee: build.query<
      GetEmployeeGuaranterEmployeeApiResponse,
      GetEmployeeGuaranterEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetEmployeeGuaranterOfEmployee`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    getEmployeeGurantersById: build.query<
      GetEmployeeGurantersByIdApiResponse,
      GetEmployeeGurantersByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetEmployeeGurantersById`,
        params: {
          guaranteeId: queryArg.guaranteeId,
        },
      }),
    }),
    getFamilyOfAnEmployee: build.query<
      GetFamilyOfAnEmployeeApiResponse,
      GetFamilyOfAnEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/GetFamilyOfAnEmployee`,
        params: {
          employeeID: queryArg.employeeId,
        },
      }),
    }),
    updateEmployeeExperience: build.mutation<
      UpdateEmployeeExperienceApiResponse,
      UpdateEmployeeExperienceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/UpdateEmployeeExperience`,
        method: "PUT",
        body: queryArg.updateEmployeeExperienceCommand,
      }),
    }),
    updateEmployeeFamily: build.mutation<
      UpdateEmployeeFamilyApiResponse,
      UpdateEmployeeFamilyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/UpdateEmployeeFamily`,
        method: "PUT",
        body: queryArg.updateEmployeeFamilyCommand,
      }),
    }),
    updateEmployeeGuranters: build.mutation<
      UpdateEmployeeGurantersApiResponse,
      UpdateEmployeeGurantersApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeFamily/UpdateEmployeeGuranters`,
        method: "PUT",
        body: queryArg.updateEmployeeGurantersCommand,
      }),
    }),
    getEmployeeById: build.query<
      GetEmployeeByIdApiResponse,
      GetEmployeeByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/EmployeeProfile/${queryArg.id}` }),
    }),
    addEmployeePhoto: build.mutation<
      AddEmployeePhotoApiResponse,
      AddEmployeePhotoApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/${queryArg.id}/add-photo`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getEmployeeByBusinessUnitId: build.query<
      GetEmployeeByBusinessUnitIdApiResponse,
      GetEmployeeByBusinessUnitIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/${queryArg.id}/businessUnit`,
      }),
    }),
    getEmployeeInfo: build.query<
      GetEmployeeInfoApiResponse,
      GetEmployeeInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/${queryArg.id}/info`,
        params: {
          version: queryArg.version,
        },
      }),
    }),
    addEmployeeNote: build.mutation<
      AddEmployeeNoteApiResponse,
      AddEmployeeNoteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/${queryArg.id}/note`,
        method: "POST",
        body: queryArg.note,
      }),
    }),
    getEmployeeRecordVersions: build.query<
      GetEmployeeRecordVersionsApiResponse,
      GetEmployeeRecordVersionsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/${queryArg.id}/record-versions`,
      }),
    }),
    createEmployeeProfile: build.mutation<
      CreateEmployeeProfileApiResponse,
      CreateEmployeeProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/add`,
        method: "POST",
        body: queryArg.createEmployeeProfileCommand,
      }),
    }),
    getAllEmployees: build.query<
      GetAllEmployeesApiResponse,
      GetAllEmployeesApiArg
    >({
      query: () => ({ url: `/api/EmployeeProfile/all` }),
    }),
    getAllEmployeesByStatus: build.query<
      GetAllEmployeesByStatusApiResponse,
      GetAllEmployeesByStatusApiArg
    >({
      query: () => ({ url: `/api/EmployeeProfile/allByStatus` }),
    }),
    getAllEmployeetLists: build.query<
      GetAllEmployeetListsApiResponse,
      GetAllEmployeetListsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/allEmployees`,
        params: {
          businessUnitId: queryArg.businessUnitId,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    approveEmployee: build.mutation<
      ApproveEmployeeApiResponse,
      ApproveEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/approve-approval-request`,
        method: "POST",
        body: queryArg.changeWorkflowStatusEntityDto,
      }),
    }),
    getEmployeeCountPerApprovalStatus: build.query<
      GetEmployeeCountPerApprovalStatusApiResponse,
      GetEmployeeCountPerApprovalStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/counts`,
        params: {
          businssUnitId: queryArg.businssUnitId,
        },
      }),
    }),
    createEmployeeEmergencyContact: build.mutation<
      CreateEmployeeEmergencyContactApiResponse,
      CreateEmployeeEmergencyContactApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/CreateEmployeeEmergencyContact`,
        method: "POST",
        body: queryArg.createEmployeeEmergencyContactCommand,
      }),
    }),
    getEmployeeEmergencyContacts: build.query<
      GetEmployeeEmergencyContactsApiResponse,
      GetEmployeeEmergencyContactsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/GetEmployeeEmeregencyContact/${queryArg.employeeId}`,
      }),
    }),
    rejectEmployeeApprovalRequest: build.mutation<
      RejectEmployeeApprovalRequestApiResponse,
      RejectEmployeeApprovalRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/reject-approval-request`,
        method: "POST",
        body: queryArg.changeWorkflowStatusEntityDto,
      }),
    }),
    submitForApproval: build.mutation<
      SubmitForApprovalApiResponse,
      SubmitForApprovalApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/submit-for-approval`,
        method: "POST",
        body: queryArg.changeWorkflowStatusEntityDto,
      }),
    }),
    updateEmployee: build.mutation<
      UpdateEmployeeApiResponse,
      UpdateEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/update`,
        method: "POST",
        body: queryArg.updateEmployeeCommand,
      }),
    }),
    updateEmployeeEmergencyContactCommand: build.mutation<
      UpdateEmployeeEmergencyContactCommandApiResponse,
      UpdateEmployeeEmergencyContactCommandApiArg
    >({
      query: (queryArg) => ({
        url: `/api/EmployeeProfile/UpdateEmployeeEmergencyContactCommand`,
        method: "PUT",
        body: queryArg.updateEmployeeEmergencyContactCommand,
      }),
    }),
    activateJobRole: build.mutation<
      ActivateJobRoleApiResponse,
      ActivateJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/Activate`,
        method: "PUT",
        body: queryArg.activateJobRoleCommand,
      }),
    }),
    activateJob: build.mutation<ActivateJobApiResponse, ActivateJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/ActivateJob`,
        method: "POST",
        body: queryArg.activateJobCommand,
      }),
    }),
    addJob: build.mutation<AddJobApiResponse, AddJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/AddJob`,
        method: "POST",
        body: queryArg.addJobCommand,
      }),
    }),
    addJobCatagory: build.mutation<
      AddJobCatagoryApiResponse,
      AddJobCatagoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/AddJobCatagory`,
        method: "POST",
        body: queryArg.addJobCatagoryCommand,
      }),
    }),
    addJobGrade: build.mutation<AddJobGradeApiResponse, AddJobGradeApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/AddJobGrade`,
        method: "POST",
        body: queryArg.addJobGradeCommand,
      }),
    }),
    addJobRole: build.mutation<AddJobRoleApiResponse, AddJobRoleApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/AddJobRoles`,
        method: "POST",
        body: queryArg.addJobRoleCommand,
      }),
    }),
    getAllJobCatagory: build.query<
      GetAllJobCatagoryApiResponse,
      GetAllJobCatagoryApiArg
    >({
      query: () => ({ url: `/api/Job/allJobCatagory` }),
    }),
    getAllJobGrade: build.query<
      GetAllJobGradeApiResponse,
      GetAllJobGradeApiArg
    >({
      query: () => ({ url: `/api/Job/allJobGrades` }),
    }),
    getAllJobList: build.query<GetAllJobListApiResponse, GetAllJobListApiArg>({
      query: () => ({ url: `/api/Job/AllJobList` }),
    }),
    getAllJobRole: build.query<GetAllJobRoleApiResponse, GetAllJobRoleApiArg>({
      query: () => ({ url: `/api/Job/allJobRole` }),
    }),
    getJobRolesLists: build.query<
      GetJobRolesListsApiResponse,
      GetJobRolesListsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/allJobRoles`,
        params: {
          status: queryArg.status,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    approveJob: build.mutation<ApproveJobApiResponse, ApproveJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/ApproveJob`,
        method: "POST",
        body: queryArg.approveJobCommand,
      }),
    }),
    approveJobRole: build.mutation<
      ApproveJobRoleApiResponse,
      ApproveJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/ApproveJobRole`,
        method: "PUT",
        body: queryArg.approveJobRolesCommand,
      }),
    }),
    getJobRolesCountPerApprovalStatus: build.query<
      GetJobRolesCountPerApprovalStatusApiResponse,
      GetJobRolesCountPerApprovalStatusApiArg
    >({
      query: () => ({ url: `/api/Job/counts` }),
    }),
    deactivateJobRole: build.mutation<
      DeactivateJobRoleApiResponse,
      DeactivateJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/Deactivate`,
        method: "PUT",
        body: queryArg.deactivateJobRoleCommand,
      }),
    }),
    deactivateJob: build.mutation<
      DeactivateJobApiResponse,
      DeactivateJobApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/DeactivateJob`,
        method: "POST",
        body: queryArg.deactivateJobCommand,
      }),
    }),
    getJobForPagination: build.query<
      GetJobForPaginationApiResponse,
      GetJobForPaginationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/GetJobForPagination`,
        params: {
          status: queryArg.status,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    getJobListByBusinessUnitAndJobRole: build.query<
      GetJobListByBusinessUnitAndJobRoleApiResponse,
      GetJobListByBusinessUnitAndJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/GetJobListByBusinessUnitAndJobRole`,
        params: {
          businessUnit: queryArg.businessUnit,
          jobRole: queryArg.jobRole,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    getJobRoleById: build.query<
      GetJobRoleByIdApiResponse,
      GetJobRoleByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/GetJobRoleById`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    getJobCountPerStatus: build.query<
      GetJobCountPerStatusApiResponse,
      GetJobCountPerStatusApiArg
    >({
      query: () => ({ url: `/api/Job/JobCountsBystatus` }),
    }),
    rejectJob: build.mutation<RejectJobApiResponse, RejectJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/RejectJob`,
        method: "POST",
        body: queryArg.rejectJobCommand,
      }),
    }),
    rejectJobRole: build.mutation<
      RejectJobRoleApiResponse,
      RejectJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/RejectJobRole`,
        method: "PUT",
        body: queryArg.rejectJobRolesCommand,
      }),
    }),
    submitJob: build.mutation<SubmitJobApiResponse, SubmitJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/SubmitJob`,
        method: "POST",
        body: queryArg.submitJobCommand,
      }),
    }),
    submitJobRoles: build.mutation<
      SubmitJobRolesApiResponse,
      SubmitJobRolesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/SubmitJobRoles`,
        method: "PUT",
        body: queryArg.submitJobRolesCommand,
      }),
    }),
    updateJob: build.mutation<UpdateJobApiResponse, UpdateJobApiArg>({
      query: (queryArg) => ({
        url: `/api/Job/UpdateJob`,
        method: "PUT",
        body: queryArg.updateJobCommand,
      }),
    }),
    updateJobRole: build.mutation<
      UpdateJobRoleApiResponse,
      UpdateJobRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Job/UpdateJobRole`,
        method: "PUT",
        body: queryArg.updateJobRoleCommand,
      }),
    }),
    createLanguage: build.mutation<
      CreateLanguageApiResponse,
      CreateLanguageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/LanguageSkill/create`,
        method: "POST",
        body: queryArg.createLanguageSkillCommand,
      }),
    }),
    getLanguageSkillById: build.query<
      GetLanguageSkillByIdApiResponse,
      GetLanguageSkillByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/LanguageSkill/GetLanguageSkillById`,
        params: {
          employeeId: queryArg.employeeId,
        },
      }),
    }),
    updateLanguageSkill: build.mutation<
      UpdateLanguageSkillApiResponse,
      UpdateLanguageSkillApiArg
    >({
      query: (queryArg) => ({
        url: `/api/LanguageSkill/update`,
        method: "PUT",
        body: queryArg.updateLanguageSkillCommand,
      }),
    }),
    getAllLookups: build.query<GetAllLookupsApiResponse, GetAllLookupsApiArg>({
      query: () => ({ url: `/api/Lookup/all` }),
    }),
    approveRegion: build.mutation<
      ApproveRegionApiResponse,
      ApproveRegionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Region/approve`,
        method: "PATCH",
        body: queryArg.approveRegionCommand,
      }),
    }),
    createRegion: build.mutation<CreateRegionApiResponse, CreateRegionApiArg>({
      query: (queryArg) => ({
        url: `/api/Region/Create`,
        method: "POST",
        body: queryArg.createRegionCommand,
      }),
    }),
    getAllRegion: build.query<GetAllRegionApiResponse, GetAllRegionApiArg>({
      query: () => ({ url: `/api/Region/GetAll` }),
    }),
    rejectRegion: build.mutation<RejectRegionApiResponse, RejectRegionApiArg>({
      query: (queryArg) => ({
        url: `/api/Region/Reject`,
        method: "PATCH",
        body: queryArg.rejectBusinessUnitCommand,
      }),
    }),
    submitRegion: build.mutation<SubmitRegionApiResponse, SubmitRegionApiArg>({
      query: (queryArg) => ({
        url: `/api/Region/submit`,
        method: "PATCH",
        body: queryArg.submitRegionCommand,
      }),
    }),
    updateRegion: build.mutation<UpdateRegionApiResponse, UpdateRegionApiArg>({
      query: (queryArg) => ({
        url: `/api/Region/Update`,
        method: "PUT",
        body: queryArg.updateRegionCommand,
      }),
    }),
    approveSubCity: build.mutation<
      ApproveSubCityApiResponse,
      ApproveSubCityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/SubCity/approve`,
        method: "PATCH",
        body: queryArg.approveSubCityCommand,
      }),
    }),
    createSubCity: build.mutation<
      CreateSubCityApiResponse,
      CreateSubCityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/SubCity/Create`,
        method: "POST",
        body: queryArg.createSubCityCommand,
      }),
    }),
    getAllSubCity: build.query<GetAllSubCityApiResponse, GetAllSubCityApiArg>({
      query: () => ({ url: `/api/SubCity/GetAll` }),
    }),
    rejectSubCity: build.mutation<
      RejectSubCityApiResponse,
      RejectSubCityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/SubCity/Reject`,
        method: "PATCH",
        body: queryArg.rejectSubCityCommand,
      }),
    }),
    submitSubCity: build.mutation<
      SubmitSubCityApiResponse,
      SubmitSubCityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/SubCity/submit`,
        method: "PATCH",
        body: queryArg.submitSubCityCommand,
      }),
    }),
    updateSubCity: build.mutation<
      UpdateSubCityApiResponse,
      UpdateSubCityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/SubCity/Update`,
        method: "PUT",
        body: queryArg.updateRegionCommand,
      }),
    }),
    currentUserInfo: build.query<
      CurrentUserInfoApiResponse,
      CurrentUserInfoApiArg
    >({
      query: () => ({ url: `/api/Users/current` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as AIDAApi };
export type CreateAddressApiResponse = /** status 200 Success */ number;
export type CreateAddressApiArg = {
  createAddressCommand: CreateAddressCommand;
};
export type GetAddressByRequestIdApiResponse =
  /** status 200 Success */ AddressDto;
export type GetAddressByRequestIdApiArg = {
  requestId?: number;
  addressType?: AddressTypeEnum;
};
export type GetAddressQueryByEntityTypeApiResponse =
  /** status 200 Success */ AddressDto[];
export type GetAddressQueryByEntityTypeApiArg = {
  entityId?: number;
};
export type GetEmployeeFamilyAddressByIdApiResponse =
  /** status 200 Success */ AddressDto[];
export type GetEmployeeFamilyAddressByIdApiArg = {
  addressId?: number;
};
export type GetGuaranterAddressApiResponse =
  /** status 200 Success */ AddressDto[];
export type GetGuaranterAddressApiArg = {
  employeeId?: number;
};
export type GetGuaranterWorkingFirmAddressApiResponse =
  /** status 200 Success */ AddressDto[];
export type GetGuaranterWorkingFirmAddressApiArg = {
  employeeId?: number;
};
export type UpdateAddressByRequestIdApiResponse =
  /** status 200 Success */ number;
export type UpdateAddressByRequestIdApiArg = {
  updateAddressCommand: UpdateAddressCommand;
};
export type LoginApiResponse = /** status 200 Success */ LoginRes;
export type LoginApiArg = {
  returnUrl?: string;
  userLogin: UserLogin;
};
export type RegisterUserApiResponse = unknown;
export type RegisterUserApiArg = {
  userRegisterDto: UserRegisterDto;
};
export type VerificationCodeApiResponse = unknown;
export type VerificationCodeApiArg = {
  verificationCode: VerificationCode;
};
export type ActivateBusinessUnitApiResponse = /** status 200 Success */ number;
export type ActivateBusinessUnitApiArg = {
  activateBusinessUnitCommand: ActivateBusinessUnitCommand;
};
export type GetAllBusinessUnitsApiResponse =
  /** status 200 Success */ BusinessUnitLists;
export type GetAllBusinessUnitsApiArg = void;
export type GetAllBuisnessUnitListsApiResponse =
  /** status 200 Success */ BusinessUnitSearchResult;
export type GetAllBuisnessUnitListsApiArg = {
  status?: ApprovalStatus;
  pageNumber?: number;
  pageSize?: number;
};
export type ApproveBusinessUnitApiResponse = /** status 200 Success */ number;
export type ApproveBusinessUnitApiArg = {
  approveBusinessUnitCommand: ApproveBusinessUnitCommand;
};
export type CloseBusinessUnitApiResponse = /** status 200 Success */ number;
export type CloseBusinessUnitApiArg = {
  closeBusinessUnitCommand: CloseBusinessUnitCommand;
};
export type GetBusinessUnitCountPerApprovalStatusApiResponse =
  /** status 200 Success */ BusinessUnitCountsByStatus;
export type GetBusinessUnitCountPerApprovalStatusApiArg = void;
export type CreateBusinessUnitApiResponse = /** status 200 Success */ number;
export type CreateBusinessUnitApiArg = {
  createBusinessUnitCommand: CreateBusinessUnitCommand;
};
export type RejectBusinessUnitApiResponse = /** status 200 Success */ number;
export type RejectBusinessUnitApiArg = {
  rejectBusinessUnitCommand: RejectBusinessUnitCommand;
};
export type SearchAllBusinessUnitsApiResponse =
  /** status 200 Success */ BusinessUnitDto[];
export type SearchAllBusinessUnitsApiArg = void;
export type SearchBusinessUnitsApiResponse =
  /** status 200 Success */ BusinessUnitDto[];
export type SearchBusinessUnitsApiArg = {
  query?: string;
};
export type SubmitBusinessUnitApiResponse = /** status 200 Success */ number;
export type SubmitBusinessUnitApiArg = {
  submitBusinessUnitCommand: SubmitBusinessUnitCommand;
};
export type UpdateBusinessUnitApiResponse = /** status 200 Success */ number;
export type UpdateBusinessUnitApiArg = {
  updateBusinessUnitCommand: UpdateBusinessUnitCommand;
};
export type GetContactsByIdApiResponse = unknown;
export type GetContactsByIdApiArg = {
  requestId?: number;
  contactCategory?: ContactCategoryEnum;
};
export type CreateContactApiResponse = /** status 200 Success */ number;
export type CreateContactApiArg = {
  createContactCommand: CreateContactCommand;
};
export type GetContactByRequestIdApiResponse =
  /** status 200 Success */ ContactDto;
export type GetContactByRequestIdApiArg = {
  requestId?: number;
  contactCategory?: ContactCategoryEnum;
  type?: ContactTypeEnum;
};
export type GetContactOfGuaraterApiResponse =
  /** status 200 Success */ ContactDto[];
export type GetContactOfGuaraterApiArg = {
  contactId?: number;
};
export type GetContactOfGuaraterWorkingFirmApiResponse =
  /** status 200 Success */ ContactDto[];
export type GetContactOfGuaraterWorkingFirmApiArg = {
  contactId?: number;
};
export type GetContactsByEntityApiResponse =
  /** status 200 Success */ ContactDto[];
export type GetContactsByEntityApiArg = {
  employeeId?: number;
};
export type GetEmployeeFamilyContactByIdApiResponse =
  /** status 200 Success */ ContactDto;
export type GetEmployeeFamilyContactByIdApiArg = {
  contactId?: number;
  contactCategory?: ContactCategoryEnum;
};
export type UpdateContactByRequestIdApiResponse =
  /** status 200 Success */ number;
export type UpdateContactByRequestIdApiArg = {
  updateContactCommand: UpdateContactCommand;
};
export type GetApiDocumentsByIdApiResponse = /** status 200 Success */ Blob;
export type GetApiDocumentsByIdApiArg = {
  id: string;
};
export type DownloadDocumentApiResponse = /** status 200 Success */ Blob;
export type DownloadDocumentApiArg = {
  id: string;
};
export type DocumentRootPathApiResponse =
  /** status 200 Success */ DocumentEndpointRootPath;
export type DocumentRootPathApiArg = void;
export type CreateEducationApiResponse = /** status 200 Success */ number;
export type CreateEducationApiArg = {
  createEducationCommand: CreateEducationCommand;
};
export type GetEducationByIdApiResponse =
  /** status 200 Success */ EducationDto[];
export type GetEducationByIdApiArg = {
  employeeId?: number;
};
export type UpdateEducationApiResponse = /** status 200 Success */ number;
export type UpdateEducationApiArg = {
  updateEducationCommand: UpdateEducationCommand;
};
export type AddEmployeeExperienceApiResponse = /** status 200 Success */ number;
export type AddEmployeeExperienceApiArg = {
  addEmployeeExperienceCommand: AddEmployeeExperienceCommand;
};
export type AddEmployeeChildrenApiResponse = /** status 200 Success */ number;
export type AddEmployeeChildrenApiArg = {
  addEmployeeFamilyCommand: AddEmployeeFamilyCommand;
};
export type AddEmployeeGurantersApiResponse = /** status 200 Success */ number;
export type AddEmployeeGurantersApiArg = {
  addEmployeeGurantersCommand: AddEmployeeGurantersCommand;
};
export type AllFamilyOfAllEmployeeApiResponse =
  /** status 200 Success */ EmployeeFamilyDto[];
export type AllFamilyOfAllEmployeeApiArg = void;
export type GetFamilyApiResponse =
  /** status 200 Success */ EmployeeFamilyRead[];
export type GetFamilyApiArg = {
  familyId?: number;
};
export type GetEmployeeExperienceByIdApiResponse =
  /** status 200 Success */ EmployeeExperienceDto[];
export type GetEmployeeExperienceByIdApiArg = {
  id?: number;
};
export type GetEmployeeExperienceListOfEmployeeApiResponse =
  /** status 200 Success */ EmployeeExperienceDto[];
export type GetEmployeeExperienceListOfEmployeeApiArg = {
  employeeId?: number;
};
export type GetEmployeeGuaranterEmployeeApiResponse =
  /** status 200 Success */ EmployeeGurantersDto[];
export type GetEmployeeGuaranterEmployeeApiArg = {
  employeeId?: number;
};
export type GetEmployeeGurantersByIdApiResponse =
  /** status 200 Success */ EmployeeGurantersDto[];
export type GetEmployeeGurantersByIdApiArg = {
  guaranteeId?: number;
};
export type GetFamilyOfAnEmployeeApiResponse =
  /** status 200 Success */ EmployeeFamilyDto[];
export type GetFamilyOfAnEmployeeApiArg = {
  employeeId?: number;
};
export type UpdateEmployeeExperienceApiResponse =
  /** status 200 Success */ number;
export type UpdateEmployeeExperienceApiArg = {
  updateEmployeeExperienceCommand: UpdateEmployeeExperienceCommand;
};
export type UpdateEmployeeFamilyApiResponse = /** status 200 Success */ number;
export type UpdateEmployeeFamilyApiArg = {
  updateEmployeeFamilyCommand: UpdateEmployeeFamilyCommand;
};
export type UpdateEmployeeGurantersApiResponse =
  /** status 200 Success */ number;
export type UpdateEmployeeGurantersApiArg = {
  updateEmployeeGurantersCommand: UpdateEmployeeGurantersCommand;
};
export type GetEmployeeByIdApiResponse =
  /** status 200 Success */ EmployeeDetailsDto;
export type GetEmployeeByIdApiArg = {
  id: number;
};
export type AddEmployeePhotoApiResponse =
  /** status 200 Success */ DocumentMetadataDto;
export type AddEmployeePhotoApiArg = {
  id: number;
  body: {
    file?: Blob;
  };
};
export type GetEmployeeByBusinessUnitIdApiResponse =
  /** status 200 Success */ EmployeeDto[];
export type GetEmployeeByBusinessUnitIdApiArg = {
  id: number;
};
export type GetEmployeeInfoApiResponse = /** status 200 Success */ EmployeeDto;
export type GetEmployeeInfoApiArg = {
  id: number;
  version?: string;
};
export type AddEmployeeNoteApiResponse = unknown;
export type AddEmployeeNoteApiArg = {
  id: number;
  note: Note;
};
export type GetEmployeeRecordVersionsApiResponse =
  /** status 200 Success */ EmployeeRecordVersions;
export type GetEmployeeRecordVersionsApiArg = {
  id: number;
};
export type CreateEmployeeProfileApiResponse = /** status 200 Success */ number;
export type CreateEmployeeProfileApiArg = {
  createEmployeeProfileCommand: CreateEmployeeProfileCommand;
};
export type GetAllEmployeesApiResponse =
  /** status 200 Success */ EmployeeDto[];
export type GetAllEmployeesApiArg = void;
export type GetAllEmployeesByStatusApiResponse =
  /** status 200 Success */ EmployeeList;
export type GetAllEmployeesByStatusApiArg = void;
export type GetAllEmployeetListsApiResponse =
  /** status 200 Success */ EmployeeSearchResult;
export type GetAllEmployeetListsApiArg = {
  businessUnitId?: number;
  pageNumber?: number;
  pageSize?: number;
};
export type ApproveEmployeeApiResponse = unknown;
export type ApproveEmployeeApiArg = {
  changeWorkflowStatusEntityDto: ChangeWorkflowStatusEntityDto;
};
export type GetEmployeeCountPerApprovalStatusApiResponse =
  /** status 200 Success */ GetEmployeeCount;
export type GetEmployeeCountPerApprovalStatusApiArg = {
  businssUnitId?: number;
};
export type CreateEmployeeEmergencyContactApiResponse =
  /** status 200 Success */ number;
export type CreateEmployeeEmergencyContactApiArg = {
  createEmployeeEmergencyContactCommand: CreateEmployeeEmergencyContactCommand;
};
export type GetEmployeeEmergencyContactsApiResponse =
  /** status 200 Success */ EmployeeEmergencyContactDtoRead[];
export type GetEmployeeEmergencyContactsApiArg = {
  employeeId: number;
};
export type RejectEmployeeApprovalRequestApiResponse = unknown;
export type RejectEmployeeApprovalRequestApiArg = {
  changeWorkflowStatusEntityDto: ChangeWorkflowStatusEntityDto;
};
export type SubmitForApprovalApiResponse = unknown;
export type SubmitForApprovalApiArg = {
  changeWorkflowStatusEntityDto: ChangeWorkflowStatusEntityDto;
};
export type UpdateEmployeeApiResponse = /** status 200 Success */ number;
export type UpdateEmployeeApiArg = {
  updateEmployeeCommand: UpdateEmployeeCommand;
};
export type UpdateEmployeeEmergencyContactCommandApiResponse =
  /** status 200 Success */ number;
export type UpdateEmployeeEmergencyContactCommandApiArg = {
  updateEmployeeEmergencyContactCommand: UpdateEmployeeEmergencyContactCommand;
};
export type ActivateJobRoleApiResponse = /** status 200 Success */ number;
export type ActivateJobRoleApiArg = {
  activateJobRoleCommand: ActivateJobRoleCommand;
};
export type ActivateJobApiResponse = /** status 200 Success */ number;
export type ActivateJobApiArg = {
  activateJobCommand: ActivateJobCommand;
};
export type AddJobApiResponse = /** status 200 Success */ JobCreationResponse;
export type AddJobApiArg = {
  addJobCommand: AddJobCommand;
};
export type AddJobCatagoryApiResponse = /** status 200 Success */ number;
export type AddJobCatagoryApiArg = {
  addJobCatagoryCommand: AddJobCatagoryCommand;
};
export type AddJobGradeApiResponse = /** status 200 Success */ string;
export type AddJobGradeApiArg = {
  addJobGradeCommand: AddJobGradeCommand;
};
export type AddJobRoleApiResponse = /** status 200 Success */ number;
export type AddJobRoleApiArg = {
  addJobRoleCommand: AddJobRoleCommand;
};
export type GetAllJobCatagoryApiResponse =
  /** status 200 Success */ JobCatagory[];
export type GetAllJobCatagoryApiArg = void;
export type GetAllJobGradeApiResponse = /** status 200 Success */ JobGrade[];
export type GetAllJobGradeApiArg = void;
export type GetAllJobListApiResponse = /** status 200 Success */ JobDto[];
export type GetAllJobListApiArg = void;
export type GetAllJobRoleApiResponse = /** status 200 Success */ JobRoleDto[];
export type GetAllJobRoleApiArg = void;
export type GetJobRolesListsApiResponse =
  /** status 200 Success */ JobRolesSearchResult;
export type GetJobRolesListsApiArg = {
  status?: ApprovalStatus;
  pageNumber?: number;
  pageSize?: number;
};
export type ApproveJobApiResponse = /** status 200 Success */ number;
export type ApproveJobApiArg = {
  approveJobCommand: ApproveJobCommand;
};
export type ApproveJobRoleApiResponse = /** status 200 Success */ number;
export type ApproveJobRoleApiArg = {
  approveJobRolesCommand: ApproveJobRolesCommand;
};
export type GetJobRolesCountPerApprovalStatusApiResponse =
  /** status 200 Success */ JobRolesCountsByStatus;
export type GetJobRolesCountPerApprovalStatusApiArg = void;
export type DeactivateJobRoleApiResponse = /** status 200 Success */ number;
export type DeactivateJobRoleApiArg = {
  deactivateJobRoleCommand: DeactivateJobRoleCommand;
};
export type DeactivateJobApiResponse = /** status 200 Success */ number;
export type DeactivateJobApiArg = {
  deactivateJobCommand: DeactivateJobCommand;
};
export type GetJobForPaginationApiResponse =
  /** status 200 Success */ JobSearchResult;
export type GetJobForPaginationApiArg = {
  status?: ApprovalStatus;
  pageNumber?: number;
  pageSize?: number;
};
export type GetJobListByBusinessUnitAndJobRoleApiResponse =
  /** status 200 Success */ JobSearchResultByBusinessUnitAndJobRole;
export type GetJobListByBusinessUnitAndJobRoleApiArg = {
  businessUnit?: number;
  jobRole?: number;
  pageNumber?: number;
  pageSize?: number;
};
export type GetJobRoleByIdApiResponse = /** status 200 Success */ number;
export type GetJobRoleByIdApiArg = {
  id?: number;
};
export type GetJobCountPerStatusApiResponse =
  /** status 200 Success */ JobCountsByStatus;
export type GetJobCountPerStatusApiArg = void;
export type RejectJobApiResponse = /** status 200 Success */ number;
export type RejectJobApiArg = {
  rejectJobCommand: RejectJobCommand;
};
export type RejectJobRoleApiResponse = /** status 200 Success */ number;
export type RejectJobRoleApiArg = {
  rejectJobRolesCommand: RejectJobRolesCommand;
};
export type SubmitJobApiResponse = /** status 200 Success */ number;
export type SubmitJobApiArg = {
  submitJobCommand: SubmitJobCommand;
};
export type SubmitJobRolesApiResponse = /** status 200 Success */ number;
export type SubmitJobRolesApiArg = {
  submitJobRolesCommand: SubmitJobRolesCommand;
};
export type UpdateJobApiResponse =
  /** status 200 Success */ JobUpdationResponse;
export type UpdateJobApiArg = {
  updateJobCommand: UpdateJobCommand;
};
export type UpdateJobRoleApiResponse = /** status 200 Success */ number;
export type UpdateJobRoleApiArg = {
  updateJobRoleCommand: UpdateJobRoleCommand;
};
export type CreateLanguageApiResponse = /** status 200 Success */ number;
export type CreateLanguageApiArg = {
  createLanguageSkillCommand: CreateLanguageSkillCommand;
};
export type GetLanguageSkillByIdApiResponse =
  /** status 200 Success */ LanguageSkillDto[];
export type GetLanguageSkillByIdApiArg = {
  employeeId?: number;
};
export type UpdateLanguageSkillApiResponse = /** status 200 Success */ number;
export type UpdateLanguageSkillApiArg = {
  updateLanguageSkillCommand: UpdateLanguageSkillCommand;
};
export type GetAllLookupsApiResponse = /** status 200 Success */ LookupDto;
export type GetAllLookupsApiArg = void;
export type ApproveRegionApiResponse = /** status 200 Success */ number;
export type ApproveRegionApiArg = {
  approveRegionCommand: ApproveRegionCommand;
};
export type CreateRegionApiResponse = /** status 200 Success */ number;
export type CreateRegionApiArg = {
  createRegionCommand: CreateRegionCommand;
};
export type GetAllRegionApiResponse = /** status 200 Success */ RegionLists;
export type GetAllRegionApiArg = void;
export type RejectRegionApiResponse = /** status 200 Success */ number;
export type RejectRegionApiArg = {
  rejectBusinessUnitCommand: RejectBusinessUnitCommand;
};
export type SubmitRegionApiResponse = /** status 200 Success */ number;
export type SubmitRegionApiArg = {
  submitRegionCommand: SubmitRegionCommand;
};
export type UpdateRegionApiResponse = /** status 200 Success */ number;
export type UpdateRegionApiArg = {
  updateRegionCommand: UpdateRegionCommand;
};
export type ApproveSubCityApiResponse = /** status 200 Success */ number;
export type ApproveSubCityApiArg = {
  approveSubCityCommand: ApproveSubCityCommand;
};
export type CreateSubCityApiResponse = /** status 200 Success */ number;
export type CreateSubCityApiArg = {
  createSubCityCommand: CreateSubCityCommand;
};
export type GetAllSubCityApiResponse = /** status 200 Success */ SubCityLists;
export type GetAllSubCityApiArg = void;
export type RejectSubCityApiResponse = /** status 200 Success */ number;
export type RejectSubCityApiArg = {
  rejectSubCityCommand: RejectSubCityCommand;
};
export type SubmitSubCityApiResponse = /** status 200 Success */ number;
export type SubmitSubCityApiArg = {
  submitSubCityCommand: SubmitSubCityCommand;
};
export type UpdateSubCityApiResponse = /** status 200 Success */ number;
export type UpdateSubCityApiArg = {
  updateRegionCommand: UpdateRegionCommand;
};
export type CurrentUserInfoApiResponse = /** status 200 Success */ UserDtoRead;
export type CurrentUserInfoApiArg = void;
export type AddressTypeEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type CountryEnum = 1;
export type CreateAddressCommand = {
  addressType?: AddressTypeEnum;
  country?: CountryEnum;
  regionId?: number | null;
  subCityId?: number | null;
  woreda?: string | null;
  city?: string | null;
  kebele?: string | null;
  houseNumber?: string | null;
  requestId?: number;
};
export type AddressDto = {
  id?: number;
  addressType?: AddressTypeEnum;
  country?: CountryEnum;
  regionId?: number | null;
  regionName?: string | null;
  subCityId?: number | null;
  subCityName?: string | null;
  woreda?: string | null;
  city?: string | null;
  kebele?: string | null;
  houseNumber?: string | null;
  requestId?: number;
  registeredOn?: string;
};
export type UpdateAddressCommand = {
  id?: number;
  addressType?: AddressTypeEnum;
  country?: CountryEnum;
  regionId?: number | null;
  subCityId?: number | null;
  woreda?: string | null;
  city?: string | null;
  kebele?: string | null;
  houseNumber?: string | null;
  requestId?: number;
};
export type LoginRes = {
  isSuccess?: boolean;
  needVerification?: boolean | null;
  isLockedOut?: boolean | null;
};
export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
};
export type UserLogin = {
  userEmail?: string | null;
  password?: string | null;
};
export type UserRegisterDto = {
  email?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  branchId?: number;
  roles?: string[] | null;
};
export type VerificationCode = {
  code?: string | null;
};
export type ActivateBusinessUnitCommand = {
  id?: number;
};
export type BusinessUnitTypeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type ApprovalStatus = 1 | 2 | 3 | 4;
export type Status = 1 | 2;
export type BusinessUnitDto = {
  id?: number;
  businessUnitID?: string | null;
  name?: string | null;
  parentBusinessUnitName?: string | null;
  parentId?: number;
  businessUnitTypeName?: string | null;
  type?: BusinessUnitTypeEnum;
  areaCode?: string | null;
  businessUnitCode?: string | null;
  staffStrength?: number | null;
  supervisorId?: number | null;
  supervisorName?: string | null;
  expenseGL?: string | null;
  incomeGL?: string | null;
  approvalStatus?: ApprovalStatus;
  status?: Status;
};
export type BusinessUnitLists = {
  approved?: BusinessUnitDto[] | null;
  submitted?: BusinessUnitDto[] | null;
  rejected?: BusinessUnitDto[] | null;
  draft?: BusinessUnitDto[] | null;
};
export type BusinessUnitSearchResult = {
  items?: BusinessUnitDto[] | null;
  totalCount?: number;
};
export type ApproveBusinessUnitCommand = {
  id?: number;
};
export type CloseBusinessUnitCommand = {
  id?: number;
};
export type BusinessUnitCountsByStatus = {
  approved?: number;
  approvalRequests?: number;
  rejected?: number;
  drafts?: number;
};
export type CreateBusinessUnitCommand = {
  name?: string | null;
  parentId?: number;
  type?: BusinessUnitTypeEnum;
  supervisorId?: number | null;
  staffStrength?: number | null;
  expenseGL?: string | null;
  incomeGL?: string | null;
};
export type RejectBusinessUnitCommand = {
  id?: number;
};
export type SubmitBusinessUnitCommand = {
  id?: number;
};
export type UpdateBusinessUnitCommand = {
  id?: number;
  name?: string | null;
  parentId?: number;
  type?: BusinessUnitTypeEnum;
  supervisorId?: number | null;
  staffStrength?: number | null;
  expenseGL?: string | null;
  incomeGL?: string | null;
};
export type ContactCategoryEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type ContactTypeEnum = 1 | 2 | 3 | 4 | 5 | 6;
export type CreateContactCommand = {
  type?: ContactTypeEnum;
  value?: string | null;
  contactCategory?: ContactCategoryEnum;
  requestId?: number;
};
export type ContactDto = {
  id?: number;
  type?: ContactTypeEnum;
  value?: string | null;
  contactCategory?: ContactCategoryEnum;
  requestId?: number;
};
export type UpdateContactCommand = {
  id?: number;
  type?: ContactTypeEnum;
  value?: string | null;
  contactCategory?: ContactCategoryEnum;
  requestId?: number;
};
export type DocumentEndpointRootPath = {
  path?: string | null;
};
export type EducationLevelEnum =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;
export type CreateEducationCommand = {
  educationLevel?: EducationLevelEnum;
  startDate?: string;
  endDate?: string;
  schoolName?: string | null;
  schoolCity?: string | null;
  fieldOfStudy?: string | null;
  awards?: string[] | null;
  employeeId?: number | null;
};
export type EducationDto = {
  id?: number;
  educationLevel?: EducationLevelEnum;
  startDate?: string;
  endDate?: string;
  schoolName?: string | null;
  schoolCity?: string | null;
  fieldOfStudy?: string | null;
  awards?: string[] | null;
  employeeId?: number | null;
};
export type UpdateEducationCommand = {
  id?: number;
  educationLevel?: EducationLevelEnum;
  startDate?: string;
  endDate?: string;
  schoolName?: string | null;
  schoolCity?: string | null;
  fieldOfStudy?: string | null;
  awards?: string[] | null;
};
export type AddEmployeeExperienceCommand = {
  id?: number;
  firmName?: string | null;
  startDate?: string;
  endDate?: string;
  jobTitle?: string | null;
  city?: string | null;
  lastSalary?: number;
  reasonForResignation?: string | null;
  employeeId?: number;
};
export type Gender = 0 | 1 | 2;
export type EmployeeFamilyType = 1 | 2 | 3;
export type SpouseIsWorking = 0 | 1 | 2;
export type IsParentLiving = 0 | 1 | 2;
export type ParentType = 0 | 1 | 2;
export type AddEmployeeFamilyCommand = {
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string | null;
  age?: number | null;
  fatherFullName?: string | null;
  motherFullName?: string | null;
  gender?: Gender;
  workingFirm?: string | null;
  familyType?: EmployeeFamilyType;
  spouseIsWorking?: SpouseIsWorking;
  isParentLiving?: IsParentLiving;
  familyParentType?: ParentType;
  parentLivelyHood?: string | null;
};
export type AddEmployeeGurantersCommand = {
  id?: number;
  identificationCardNo?: string | null;
  name?: string | null;
  fathersName?: string | null;
  grandfathersName?: string | null;
  workingFirm?: string | null;
  employeeId?: number;
};
export type EmployeeFamilyDto = {
  id?: number;
  employeeName?: string | null;
  fullName?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  fatherFullName?: string | null;
  motherFullName?: string | null;
  dateOfBirth?: string | null;
  age?: number | null;
  gender?: string | null;
  approvalStatus?: ApprovalStatus;
  workingFirm?: string | null;
  familyType?: EmployeeFamilyType;
  spouseIsWorking?: SpouseIsWorking;
  isParentLiving?: IsParentLiving;
  familyParentType?: ParentType;
  parentLivelyHood?: string | null;
};
export type MartialStatus = 1 | 2 | 3 | 4;
export type BusinessUnitType = {
  value?: BusinessUnitTypeEnum;
  name?: string | null;
  description?: string | null;
  numberOfDigits?: number;
  order?: number;
  isActive?: boolean;
};
export type BusinessUnit = {
  id?: number;
  businessUnitID?: string | null;
  name?: string | null;
  parentId?: number;
  type?: BusinessUnitTypeEnum;
  businessUnitCode?: string | null;
  expenseGL?: string | null;
  incomeGL?: string | null;
  supervisorId?: number | null;
  staffStrength?: number | null;
  approvalStatus?: ApprovalStatus;
  status?: Status;
  businessUnitType?: BusinessUnitType;
};
export type JobStatus = 1 | 2;
export type JobCatagoryEnum = 1 | 2 | 3 | 4;
export type JobRoleCategory = {
  id?: number;
  jobRoleCategoryName?: string | null;
};
export type JobGradeEnum = 1 | 2 | 3 | 4 | 5;
export type JobGrade = {
  value?: JobGradeEnum;
  name?: string | null;
  description?: string | null;
};
export type JobCatagory = {
  value?: JobCatagoryEnum;
  name?: string | null;
  description?: string | null;
};
export type ActivationEnum = 0 | 1;
export type JobRole = {
  id?: number;
  roleName?: string | null;
  jobCatagoryId?: JobCatagoryEnum;
  jobRoleCategoryId?: number;
  jobRoleCategory?: JobRoleCategory;
  jobGradeId?: JobGradeEnum;
  jobGrade?: JobGrade;
  jobCatagory?: JobCatagory;
  description?: string | null;
  approvalStatus?: ApprovalStatus;
  statusRemark?: string | null;
  isActive?: ActivationEnum;
};
export type Job = {
  id?: number;
  jobRoleId?: number;
  businessUnitId?: number;
  isVacant?: boolean;
  jobStatus?: JobStatus;
  approvalStatus?: ApprovalStatus;
  isLocked?: boolean;
  businessUnit?: BusinessUnit;
  jobRole?: JobRole;
  remark?: string | null;
};
export type EmployeeStatusEnum = 1 | 2 | 3 | 4 | 5;
export type DocumentType = 1 | 2 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export type EmployeeDocument = {
  isDeleted?: boolean | null;
  deletedBy?: string | null;
  deletedAt?: string | null;
  deletionComment?: string | null;
  id?: number;
  employeeId?: number;
  documentType?: DocumentType;
  documentId?: string | null;
  fileName?: string | null;
};
export type EmployeeComment = {
  id?: number;
  employeeId?: number;
  commentType?: string | null;
  commentedByUserId?: string | null;
  commentedBy?: string | null;
  text?: string | null;
  date?: string;
  employee?: Employee;
};
export type EmployeeCommentRead = {
  id?: number;
  employeeId?: number;
  commentType?: string | null;
  commentedByUserId?: string | null;
  commentedBy?: string | null;
  text?: string | null;
  date?: string;
  employee?: Employee;
};
export type Education = {
  id?: number;
  educationLevel?: EducationLevelEnum;
  startDate?: string;
  endDate?: string;
  schoolName?: string | null;
  schoolCity?: string | null;
  fieldOfStudy?: string | null;
  awards?: string[] | null;
  employeeId?: number | null;
  employee?: Employee;
};
export type EducationRead = {
  id?: number;
  educationLevel?: EducationLevelEnum;
  startDate?: string;
  endDate?: string;
  schoolName?: string | null;
  schoolCity?: string | null;
  fieldOfStudy?: string | null;
  awards?: string[] | null;
  employeeId?: number | null;
  employee?: Employee;
};
export type LanguageEnum =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73;
export type SkillLevelEnum = 1 | 2 | 3 | 4;
export type LanguageSkill = {
  id?: number;
  language?: LanguageEnum;
  speaking?: SkillLevelEnum;
  listening?: SkillLevelEnum;
  writing?: SkillLevelEnum;
  reading?: SkillLevelEnum;
  employeeId?: number | null;
  employee?: Employee;
};
export type LanguageSkillRead = {
  id?: number;
  language?: LanguageEnum;
  speaking?: SkillLevelEnum;
  listening?: SkillLevelEnum;
  writing?: SkillLevelEnum;
  reading?: SkillLevelEnum;
  employeeId?: number | null;
  employee?: Employee;
};
export type EmployeeEmergencyContact = {
  id?: number;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type EmployeeEmergencyContactRead = {
  id?: number;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type Employee = {
  createdAt?: string | null;
  modifiedAt?: string | null;
  createdBy?: string | null;
  modifiedBy?: string | null;
  approvalStatus?: ApprovalStatus;
  approvedBy?: string | null;
  approvedAt?: string | null;
  submittedBy?: string | null;
  submittedAt?: string | null;
  rejectedBy?: string | null;
  rejectedAt?: string | null;
  workflowComment?: string | null;
  versionNumber?: string;
  skipStateTransitionCheck?: boolean;
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  amharicDisplayName?: string | null;
  businessUnitID?: number;
  jobId?: number;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
  businessUnits?: BusinessUnit;
  job?: Job;
  isNew?: boolean;
  employeeStatus?: EmployeeStatusEnum;
  employeeDocuments?: EmployeeDocument[] | null;
  employeeComments?: EmployeeComment[] | null;
  educations?: Education[] | null;
  languageSkills?: LanguageSkill[] | null;
  employeeEmergencyContacts?: EmployeeEmergencyContact[] | null;
  employeeFamilies?: EmployeeFamily[] | null;
};
export type IDomainEvent = object;
export type EmployeeRead = {
  createdAt?: string | null;
  modifiedAt?: string | null;
  createdBy?: string | null;
  modifiedBy?: string | null;
  approvalStatus?: ApprovalStatus;
  approvedBy?: string | null;
  approvedAt?: string | null;
  submittedBy?: string | null;
  submittedAt?: string | null;
  rejectedBy?: string | null;
  rejectedAt?: string | null;
  workflowComment?: string | null;
  versionNumber?: string;
  skipStateTransitionCheck?: boolean;
  domainEvents?: IDomainEvent[] | null;
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  amharicDisplayName?: string | null;
  businessUnitID?: number;
  jobId?: number;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
  businessUnits?: BusinessUnit;
  job?: Job;
  isNew?: boolean;
  employeeStatus?: EmployeeStatusEnum;
  employeeDocuments?: EmployeeDocument[] | null;
  employeeComments?: EmployeeCommentRead[] | null;
  educations?: EducationRead[] | null;
  languageSkills?: LanguageSkillRead[] | null;
  employeeEmergencyContacts?: EmployeeEmergencyContactRead[] | null;
  employeeFamilies?: EmployeeFamily[] | null;
};
export type EmployeeFamily = {
  id?: number;
  employeeId?: number;
  employees?: Employee;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  fatherFullName?: string | null;
  motherFullName?: string | null;
  dateOfBirth?: string | null;
  age?: number | null;
  gender?: Gender;
  approvalStatus?: ApprovalStatus;
  workingFirm?: string | null;
  familyType?: EmployeeFamilyType;
  spouseIsWorking?: SpouseIsWorking;
  isParentLiving?: IsParentLiving;
  familyParentType?: ParentType;
  parentLivelyHood?: string | null;
};
export type EmployeeFamilyRead = {
  id?: number;
  employeeId?: number;
  employees?: EmployeeRead;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  fatherFullName?: string | null;
  motherFullName?: string | null;
  dateOfBirth?: string | null;
  age?: number | null;
  gender?: Gender;
  approvalStatus?: ApprovalStatus;
  workingFirm?: string | null;
  familyType?: EmployeeFamilyType;
  spouseIsWorking?: SpouseIsWorking;
  isParentLiving?: IsParentLiving;
  familyParentType?: ParentType;
  parentLivelyHood?: string | null;
};
export type EmployeeExperienceDto = {
  id?: number;
  firmName?: string | null;
  startDate?: string;
  endDate?: string;
  jobTitle?: string | null;
  city?: string | null;
  lastSalary?: number;
  reasonForResignation?: string | null;
  employeeId?: number;
  employeeName?: string | null;
};
export type EmployeeGurantersDto = {
  id?: number;
  identificationCardNo?: string | null;
  name?: string | null;
  fathersName?: string | null;
  grandfathersName?: string | null;
  workingFirm?: string | null;
  employeeId?: number;
};
export type UpdateEmployeeExperienceCommand = {
  id?: number;
  firmName?: string | null;
  startDate?: string;
  endDate?: string;
  jobTitle?: string | null;
  city?: string | null;
  lastSalary?: number;
  reasonForResignation?: string | null;
  employeeId?: number;
};
export type UpdateEmployeeFamilyCommand = {
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string | null;
  age?: number | null;
  fatherFullName?: string | null;
  motherFullName?: string | null;
  gender?: Gender;
  workingFirm?: string | null;
  familyType?: EmployeeFamilyType;
  spouseIsWorking?: SpouseIsWorking;
  isParentLiving?: IsParentLiving;
  familyParentType?: ParentType;
  parentLivelyHood?: string | null;
};
export type UpdateEmployeeGurantersCommand = {
  id?: number;
  identificationCardNo?: string | null;
  name?: string | null;
  fathersName?: string | null;
  grandfathersName?: string | null;
  workingFirm?: string | null;
  employeeId?: number;
};
export type EmployeeDetailsDto = {
  workflowComment?: string | null;
  approvedBy?: string | null;
  approvedAt?: string | null;
  submittedBy?: string | null;
  submittedAt?: string | null;
  rejectedBy?: string | null;
  rejectedAt?: string | null;
  versionNumber?: string;
  periodStart?: string;
  periodEnd?: string;
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  amharicDisplayName?: string | null;
  businessUnitID?: number;
  businessUnit?: string | null;
  jobTitle?: string | null;
  jobId?: number;
  photoId?: string | null;
  photoUrl?: string | null;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
  isCurrent?: boolean;
  approvalStatus?: ApprovalStatus;
  employeeDocuments?: EmployeeDocument[] | null;
  businessUnits?: BusinessUnit;
  job?: Job;
  isNew?: boolean;
  employeeStatus?: EmployeeStatusEnum;
};
export type DocumentMetadataDto = {
  id?: string | null;
};
export type EmployeeDto = {
  workflowComment?: string | null;
  approvedBy?: string | null;
  approvedAt?: string | null;
  submittedBy?: string | null;
  submittedAt?: string | null;
  rejectedBy?: string | null;
  rejectedAt?: string | null;
  versionNumber?: string;
  periodStart?: string;
  periodEnd?: string;
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  amharicDisplayName?: string | null;
  businessUnitID?: number;
  businessUnit?: string | null;
  jobTitle?: string | null;
  jobId?: number;
  photoId?: string | null;
  photoUrl?: string | null;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
  isCurrent?: boolean;
  approvalStatus?: ApprovalStatus;
  employeeDocuments?: EmployeeDocument[] | null;
  businessUnits?: BusinessUnit;
  job?: Job;
  isNew?: boolean;
  employeeStatus?: EmployeeStatusEnum;
};
export type Note = {
  text?: string | null;
};
export type EmployeeRecordVersions = {
  current?: string | null;
  approved?: string | null;
  submitted?: string | null;
  draft?: string | null;
  rejected?: string | null;
};
export type CreateEmployeeProfileCommand = {
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  businessUnitID?: number;
  jobId?: number;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
};
export type EmployeeList = {
  approved?: EmployeeDto[] | null;
  submitted?: EmployeeDto[] | null;
  rejected?: EmployeeDto[] | null;
  draft?: EmployeeDto[] | null;
};
export type EmployeeSearchResult = {
  items?: EmployeeDto[] | null;
  totalCount?: number;
};
export type ChangeWorkflowStatusEntityDto = {
  id?: number;
  note?: string | null;
};
export type GetEmployeeCount = {
  employees?: number;
};
export type CreateEmployeeEmergencyContactCommand = {
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type EmployeeEmergencyContactDto = {
  id?: number;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type EmployeeEmergencyContactDtoRead = {
  id?: number;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type UpdateEmployeeCommand = {
  id?: number;
  employeeId?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  amharicFirstName?: string | null;
  amharicMiddleName?: string | null;
  amharicLastName?: string | null;
  amharicDisplayName?: string | null;
  businessUnitID?: number;
  jobId?: number;
  birthDate?: string;
  employementDate?: string;
  gender?: Gender;
  martialStatus?: MartialStatus;
};
export type UpdateEmployeeEmergencyContactCommand = {
  id?: number;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isWorking?: boolean;
  workingFirmName?: string | null;
  employeeId?: number | null;
};
export type ActivateJobRoleCommand = {
  id?: number;
  comment?: string | null;
};
export type ActivateJobCommand = {
  id?: number;
};
export type JobCreationResponse = {
  jobId?: number;
  jobCountExceeded?: boolean;
};
export type AddJobCommand = {
  jobRoleId?: number;
  businessunitId?: number;
};
export type AddJobCatagoryCommand = {
  name?: string | null;
  description?: string | null;
};
export type AddJobGradeCommand = {
  name?: string | null;
  description?: string | null;
};
export type AddJobRoleCommand = {
  id?: number;
  roleName?: string | null;
  jobCatagoryId?: JobCatagoryEnum;
  jobRoleCategoryId?: number;
  jobGradeId?: JobGradeEnum;
  description?: string | null;
  statusRemark?: string | null;
};
export type JobDto = {
  id?: number;
  jobRoleId?: number;
  businessUnitId?: number;
  isVacant?: boolean;
  jobRole?: string | null;
  businessUnit?: string | null;
  vacant?: string | null;
  jobStatus?: JobStatus;
  approvalStatus?: ApprovalStatus;
  isLocked?: boolean;
  isJobCountExceed?: boolean;
  locked?: string | null;
};
export type JobRoleDto = {
  id?: number;
  roleName?: string | null;
  description?: string | null;
  jobCatagory?: string | null;
  jobGrade?: string | null;
  jobRoleCatagory?: string | null;
  approvalStatus?: ApprovalStatus;
  isActive?: ActivationEnum;
};
export type JobRolesSearchResult = {
  items?: JobRoleDto[] | null;
  totalCount?: number;
};
export type ApproveJobCommand = {
  id?: number;
  comment?: string | null;
};
export type ApproveJobRolesCommand = {
  id?: number;
  comment?: string | null;
};
export type JobRolesCountsByStatus = {
  approved?: number;
  approvalRequests?: number;
  rejected?: number;
  drafts?: number;
};
export type DeactivateJobRoleCommand = {
  id?: number;
  comment?: string | null;
};
export type DeactivateJobCommand = {
  id?: number;
};
export type JobSearchResult = {
  items?: JobDto[] | null;
  totalCount?: number;
};
export type JobSearchResultByBusinessUnitAndJobRole = {
  items?: JobDto[] | null;
  totalCount?: number | null;
};
export type JobCountsByStatus = {
  approved?: number;
  approvalRequests?: number;
  rejected?: number;
  drafts?: number;
};
export type RejectJobCommand = {
  id?: number;
  comment?: string | null;
};
export type RejectJobRolesCommand = {
  id?: number;
  comment?: string | null;
};
export type SubmitJobCommand = {
  id?: number;
  comment?: string | null;
};
export type SubmitJobRolesCommand = {
  id?: number;
  comment?: string | null;
};
export type JobUpdationResponse = {
  jobId?: number;
  isLocked?: boolean;
};
export type UpdateJobCommand = {
  jobId?: number;
  jobRoleId?: number;
  businessunitId?: number;
};
export type UpdateJobRoleCommand = {
  id?: number;
  roleName?: string | null;
  jobCatagoryId?: JobCatagoryEnum;
  jobRoleCategoryId?: number;
  jobGradeId?: JobGradeEnum;
  description?: string | null;
};
export type CreateLanguageSkillCommand = {
  language?: LanguageEnum;
  speaking?: SkillLevelEnum;
  listening?: SkillLevelEnum;
  writing?: SkillLevelEnum;
  reading?: SkillLevelEnum;
  employeeId?: number | null;
};
export type LanguageSkillDto = {
  id?: number;
  language?: LanguageEnum;
  speaking?: SkillLevelEnum;
  listening?: SkillLevelEnum;
  writing?: SkillLevelEnum;
  reading?: SkillLevelEnum;
  employeeId?: number | null;
};
export type UpdateLanguageSkillCommand = {
  id?: number;
  language?: LanguageEnum;
  speaking?: SkillLevelEnum;
  listening?: SkillLevelEnum;
  writing?: SkillLevelEnum;
  reading?: SkillLevelEnum;
};
export type LookupDto = {
  jobRoles?: JobRoleDto[] | null;
  jobCatagories?: JobCatagory[] | null;
  jobRoleCategories?: JobRoleCategory[] | null;
  jobGrades?: JobGrade[] | null;
  businessUnits?: BusinessUnitLists;
  businessUnitTypes?: BusinessUnitType[] | null;
};
export type ApproveRegionCommand = {
  id?: number;
};
export type CreateRegionCommand = {
  name?: string | null;
};
export type RegionDto = {
  id?: number;
  name?: string | null;
  approvalStatus?: ApprovalStatus;
};
export type RegionLists = {
  approved?: RegionDto[] | null;
  submitted?: RegionDto[] | null;
  rejected?: RegionDto[] | null;
  draft?: RegionDto[] | null;
};
export type SubmitRegionCommand = {
  id?: number;
};
export type UpdateRegionCommand = {
  id?: number;
  name?: string | null;
};
export type ApproveSubCityCommand = {
  id?: number;
};
export type CreateSubCityCommand = {
  name?: string | null;
  regionId?: number;
};
export type SubCityDto = {
  id?: number;
  name?: string | null;
  regionId?: number;
  regionName?: string | null;
  approvalStatus?: ApprovalStatus;
};
export type SubCityLists = {
  approved?: SubCityDto[] | null;
  submitted?: SubCityDto[] | null;
  rejected?: SubCityDto[] | null;
  draft?: SubCityDto[] | null;
};
export type RejectSubCityCommand = {
  id?: number;
};
export type SubmitSubCityCommand = {
  id?: number;
};
export type Permission = {
  name?: string | null;
  hasPermission?: boolean;
};
export type UserDto = {
  id?: string | null;
  email?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  branchId?: number;
  roles?: string[] | null;
  permissions?: Permission[] | null;
};
export type UserDtoRead = {
  id?: string | null;
  email?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  branchId?: number;
  roles?: string[] | null;
  permissions?: Permission[] | null;
  fullName?: string | null;
};
export const {
  useCreateAddressMutation,
  useGetAddressByRequestIdQuery,
  useLazyGetAddressByRequestIdQuery,
  useGetAddressQueryByEntityTypeQuery,
  useLazyGetAddressQueryByEntityTypeQuery,
  useGetEmployeeFamilyAddressByIdQuery,
  useLazyGetEmployeeFamilyAddressByIdQuery,
  useGetGuaranterAddressQuery,
  useLazyGetGuaranterAddressQuery,
  useGetGuaranterWorkingFirmAddressQuery,
  useLazyGetGuaranterWorkingFirmAddressQuery,
  useUpdateAddressByRequestIdMutation,
  useLoginMutation,
  useRegisterUserMutation,
  useVerificationCodeMutation,
  useActivateBusinessUnitMutation,
  useGetAllBusinessUnitsQuery,
  useLazyGetAllBusinessUnitsQuery,
  useGetAllBuisnessUnitListsQuery,
  useLazyGetAllBuisnessUnitListsQuery,
  useApproveBusinessUnitMutation,
  useCloseBusinessUnitMutation,
  useGetBusinessUnitCountPerApprovalStatusQuery,
  useLazyGetBusinessUnitCountPerApprovalStatusQuery,
  useCreateBusinessUnitMutation,
  useRejectBusinessUnitMutation,
  useSearchAllBusinessUnitsQuery,
  useLazySearchAllBusinessUnitsQuery,
  useSearchBusinessUnitsQuery,
  useLazySearchBusinessUnitsQuery,
  useSubmitBusinessUnitMutation,
  useUpdateBusinessUnitMutation,
  useGetContactsByIdQuery,
  useLazyGetContactsByIdQuery,
  useCreateContactMutation,
  useGetContactByRequestIdQuery,
  useLazyGetContactByRequestIdQuery,
  useGetContactOfGuaraterQuery,
  useLazyGetContactOfGuaraterQuery,
  useGetContactOfGuaraterWorkingFirmQuery,
  useLazyGetContactOfGuaraterWorkingFirmQuery,
  useGetContactsByEntityQuery,
  useLazyGetContactsByEntityQuery,
  useGetEmployeeFamilyContactByIdQuery,
  useLazyGetEmployeeFamilyContactByIdQuery,
  useUpdateContactByRequestIdMutation,
  useGetApiDocumentsByIdQuery,
  useLazyGetApiDocumentsByIdQuery,
  useDownloadDocumentQuery,
  useLazyDownloadDocumentQuery,
  useDocumentRootPathQuery,
  useLazyDocumentRootPathQuery,
  useCreateEducationMutation,
  useGetEducationByIdQuery,
  useLazyGetEducationByIdQuery,
  useUpdateEducationMutation,
  useAddEmployeeExperienceMutation,
  useAddEmployeeChildrenMutation,
  useAddEmployeeGurantersMutation,
  useAllFamilyOfAllEmployeeQuery,
  useLazyAllFamilyOfAllEmployeeQuery,
  useGetFamilyQuery,
  useLazyGetFamilyQuery,
  useGetEmployeeExperienceByIdQuery,
  useLazyGetEmployeeExperienceByIdQuery,
  useGetEmployeeExperienceListOfEmployeeQuery,
  useLazyGetEmployeeExperienceListOfEmployeeQuery,
  useGetEmployeeGuaranterEmployeeQuery,
  useLazyGetEmployeeGuaranterEmployeeQuery,
  useGetEmployeeGurantersByIdQuery,
  useLazyGetEmployeeGurantersByIdQuery,
  useGetFamilyOfAnEmployeeQuery,
  useLazyGetFamilyOfAnEmployeeQuery,
  useUpdateEmployeeExperienceMutation,
  useUpdateEmployeeFamilyMutation,
  useUpdateEmployeeGurantersMutation,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useAddEmployeePhotoMutation,
  useGetEmployeeByBusinessUnitIdQuery,
  useLazyGetEmployeeByBusinessUnitIdQuery,
  useGetEmployeeInfoQuery,
  useLazyGetEmployeeInfoQuery,
  useAddEmployeeNoteMutation,
  useGetEmployeeRecordVersionsQuery,
  useLazyGetEmployeeRecordVersionsQuery,
  useCreateEmployeeProfileMutation,
  useGetAllEmployeesQuery,
  useLazyGetAllEmployeesQuery,
  useGetAllEmployeesByStatusQuery,
  useLazyGetAllEmployeesByStatusQuery,
  useGetAllEmployeetListsQuery,
  useLazyGetAllEmployeetListsQuery,
  useApproveEmployeeMutation,
  useGetEmployeeCountPerApprovalStatusQuery,
  useLazyGetEmployeeCountPerApprovalStatusQuery,
  useCreateEmployeeEmergencyContactMutation,
  useGetEmployeeEmergencyContactsQuery,
  useLazyGetEmployeeEmergencyContactsQuery,
  useRejectEmployeeApprovalRequestMutation,
  useSubmitForApprovalMutation,
  useUpdateEmployeeMutation,
  useUpdateEmployeeEmergencyContactCommandMutation,
  useActivateJobRoleMutation,
  useActivateJobMutation,
  useAddJobMutation,
  useAddJobCatagoryMutation,
  useAddJobGradeMutation,
  useAddJobRoleMutation,
  useGetAllJobCatagoryQuery,
  useLazyGetAllJobCatagoryQuery,
  useGetAllJobGradeQuery,
  useLazyGetAllJobGradeQuery,
  useGetAllJobListQuery,
  useLazyGetAllJobListQuery,
  useGetAllJobRoleQuery,
  useLazyGetAllJobRoleQuery,
  useGetJobRolesListsQuery,
  useLazyGetJobRolesListsQuery,
  useApproveJobMutation,
  useApproveJobRoleMutation,
  useGetJobRolesCountPerApprovalStatusQuery,
  useLazyGetJobRolesCountPerApprovalStatusQuery,
  useDeactivateJobRoleMutation,
  useDeactivateJobMutation,
  useGetJobForPaginationQuery,
  useLazyGetJobForPaginationQuery,
  useGetJobListByBusinessUnitAndJobRoleQuery,
  useLazyGetJobListByBusinessUnitAndJobRoleQuery,
  useGetJobRoleByIdQuery,
  useLazyGetJobRoleByIdQuery,
  useGetJobCountPerStatusQuery,
  useLazyGetJobCountPerStatusQuery,
  useRejectJobMutation,
  useRejectJobRoleMutation,
  useSubmitJobMutation,
  useSubmitJobRolesMutation,
  useUpdateJobMutation,
  useUpdateJobRoleMutation,
  useCreateLanguageMutation,
  useGetLanguageSkillByIdQuery,
  useLazyGetLanguageSkillByIdQuery,
  useUpdateLanguageSkillMutation,
  useGetAllLookupsQuery,
  useLazyGetAllLookupsQuery,
  useApproveRegionMutation,
  useCreateRegionMutation,
  useGetAllRegionQuery,
  useLazyGetAllRegionQuery,
  useRejectRegionMutation,
  useSubmitRegionMutation,
  useUpdateRegionMutation,
  useApproveSubCityMutation,
  useCreateSubCityMutation,
  useGetAllSubCityQuery,
  useLazyGetAllSubCityQuery,
  useRejectSubCityMutation,
  useSubmitSubCityMutation,
  useUpdateSubCityMutation,
  useCurrentUserInfoQuery,
  useLazyCurrentUserInfoQuery,
} = injectedRtkApi;
