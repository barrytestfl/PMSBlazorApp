window.eviivo = window.eviivo ? window.eviivo : {};
window.eviivo.media = window.eviivo.media ? window.eviivo.media : {};
window.eviivo.media.main = function() {
    function s(u) {
		console.log(r);
		console.log(t);
		console.log(e);
		console.log(u);
       
         
        
    }
    function i() {
        var e, s, r, t;
        if (preact == null && o > 5) {
            console.error("preact : dependency eviivo media preview module not found.");
            return
        }
        if (preact == null) {
            o++;
            setTimeout(i, 300);
            return
        }
        if (f = window.jQuery,
        eviivo.media.dataTransfer.init({
            urls: u.urls,
            cultureCode: n.cultureCode,
            userId: n.userId,
            businessCultureCode: n.businessCultureCode,
            businessId: n.businessId
        }),
        e = f("body"),
        eviivo.jsx.render.mediaSVG(null, e[0]),
        eviivo.jsx.render.flyOut({
            callerOptions: {
                id: "pms"
            },
            actions: {
                flyOut: {
                    onComponentDidMount: h
                }
            }
        }, e[0]),
        eviivo.media.preview.init(u.restrictions),
        n.renderFlags != null && n.renderFlags.renderByDefault === !0 && n.placeholders != null && n.placeholders.length > 0)
            for (s = [],
            r = 0; r < n.placeholders.length; r++)
                t = n.placeholders[r],
                s.push(eviivo.media.preview.create({
                    id: t.placeholderId,
                    showByDefault: t.showByDefault != null && t.showByDefault === !0,
                    noButtons: t.showByDefault != null && t.showByDefault === !0,
                    galleryContext: t.galleryContext,
                    groupContext: n.renderFlags.renderPropertySelect ? t.groupContext : null,
                    cultureCode: n.cultureCode,
                    restrictions: u.restrictions,
                    textResources: n.textResources
                }));
        eviivo.media.restrictions.init(u.restrictions)
    }
    function h(n, i) {
        if (typeof eviivo == "undefined" || typeof eviivo.media == "undefined" || typeof eviivo.media.flyOut == "undefined")
            throw t + ": js module eviivo.media.flyOut not found";
        var r = {
            actions: i.internalActions,
            callerOptions: f.extend({}, i.internalOptions)
        };
        r.handlers = {
            onStateChangeHandler: n
        };
        eviivo.media.flyOut.init(r)
    }
    function c(t) {
        n = t;
        i();
        eviivo.media.restrictions.setAllowImages(n.placeholders[0].galleryContext.allowImages);
        eviivo.media.restrictions.setAllowFiles(n.placeholders[0].galleryContext.allowFiles);
        eviivo.media.mediaList.setAllowImages(n.placeholders[0].galleryContext.allowImages);
        eviivo.media.mediaList.setAllowFiles(n.placeholders[0].galleryContext.allowFiles)
    }
    function l() {
        return n
    }
    var t = "eviivo.media.main", n = null, u = {
        urls: {
            mediaApi: "//on.eviivo.com/ui-api/media",
            pmsApi: "//on.eviivo.com/suite/api",
            imagenApi: "//imagen.eviivo.com"
        },
        imageUploadChunkSize: "2097152",
        imageUploadWithMultiPart: "false",
        restrictions: {
            galleries: {
                all_media: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG", "PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG", "PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property_photos: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !0,
                    shortestSide: 800
                },
                property_emails: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG", "PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property_headers: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property_awards: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 500
                },
                property_documents: {
                    maxSize: 20480,
                    allowedMediaTypes: ["PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property_charges: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 500
                },
                room_types: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !0,
                    shortestSide: 800
                },
                my_web: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG", "PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                my_web_home: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 800
                },
                my_web_widgets: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                my_web_custom_pages: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG", "PDF"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                },
                property_checkin: {
                    maxSize: 20480,
                    allowedMediaTypes: ["GIF", "JPEG", "PNG", "JPG"],
                    mediaTypeCode: !1,
                    shortestSide: 0
                }
            },
            imageCountWarnings: {
                "default": {
                    property: 3,
                    bathroom: 1
                }
            },
            flyOut: {
                ImageEmailRestrictions: ["GIF", "JPEG", "PNG", "JPG"],
                ButtonEmailRestrictions: ["GIF", "JPEG", "PNG", "JPG", "PDF"]
            }
        }
    }, e = "//on.eviivo.com/ui/media/latest", r = "//static.eviivo.media/ui/core/4.178", f, o = 0;
    return {
        init: s,
        getOptions: l,
        updateOptions: c
    }
}();
window.eviivo = window.eviivo ? window.eviivo : {};
window.eviivo.media = window.eviivo.media ? window.eviivo.media : {};
window.eviivo.media.translations = {
    Label_Error_FileTooLarge: "This media file size is too large. The limit per file is {0} MB.",
    Label_Error_FileUploadFailed: "Upload failed",
    Button_Cancel: "Cancel",
    Label_Warning_SellingMore: "Guests want to see high quality photos of your {singularAccommodationKeyword}, from as many different angles as possible.  You should upload at least <strong>{0}<\/strong> images of your {singularAccommodationKeyword}  and <strong>{1}<\/strong> bathroom image.\r\n\r\nWe recommend that each photo is at least 2048 pixels on the longest side. Images smaller than this may not be accepted by the online travel agencies. ",
    Label_Show_Translation: "Show translations",
    Warning_12M_delete: "Media that are not used will be deleted after 12 months.",
    Accessibility_Title: "Accessibility Features",
    Flyout_Title_Categorize: "Edit",
    Label_Info_NoImagesInGallery: "You have no images in this gallery",
    Button_Remove: "Remove from gallery",
    Label_Warning_PropertyImageCount: "Lots of high quality photos will increase the chance of guests choosing your accommodation, so you should upload at least 30 photos of your property and grounds.",
    Menu_AddToGallery: "Add to gallery",
    Gallery_ListNone: "None",
    Label_SelectFiles: "select files",
    Button_ChangeFile: "Modify",
    Menu_SelectedCount: "{0} selected",
    Label_Warning_MyWebImageQuality: "Lots of high quality photos will increase the chance of guests choosing your accommodation, so you should upload at least 30 photos of your property and grounds.",
    Label_Info_NoImagesUploadInviteInline: 'Select "Upload" or drag files here to upload images.',
    Label_Warning_AllMedia_NoMediaUploaded: 'Select "Upload" or drag files to upload',
    Label_Warning_PropertyImageQuality: "High quality images increases the chance of guests choosing your accommodation. We recommend that you upload at least 30 photos of your property and grounds that are at least 2048 pixels in width. Images smaller than this may not be accepted by the online travel agencies.",
    Label_NoImage: "No image",
    Button_AddFile: "Add",
    Menu_SetMediaType: "Categorise",
    Label_Info_NoImagesUploadInvite: 'Select "Upload" to select new photos, drag files here or select existing images from the "Media library" gallery.',
    List_Caption: "Caption",
    Button_UseImages: "Use image(s)",
    Label_Warning_ConfirmDeleteGalleryNotification: "It is used in the following galleries:",
    Button_RemoveImage: "Remove image",
    List_OrderIndex: "Display order",
    Label_Image_ExcludeFlag: "Not suitable for inclusion in room/unit listings.",
    Label_NoImageSelected: "No image selected",
    Button_Ok: "OK",
    Flyout_BodyQuestion_AssignMediaType: "Choose a category for the selected media",
    List_Media: "Media",
    Label_Warning_NothingToReorder: "There is no media to order. ",
    Label_Image_size: "Resolution:",
    Label_File_Name: "File name:",
    Label_File_Size: "File size:",
    Tooltip_CopyLink: "Copy link",
    Label_Error_FileTypeNotAllowed: "This media type is not supported. We only accept: ",
    Label_Error_RequiredRezolutionNotMet: "The dimensions of this media file are too small. The required size is {0}, but your file is {1}.",
    Button_Save: "Save",
    List_Type: "Category",
    List_Date: "Upload date",
    Label_Warning_SelectionMaxLimit: "Please select {0} image",
    Link_Copied: "Link copied",
    GalleryList_AllMedia: "Media library",
    Label_Tag: "Flag any photos that display accessibility features, so that travel sites who are able to may highlight these",
    Label_URL: "Link:",
    Label_Low_Resolution: "Low resolution",
    Button_SaveAndContinue: "Save and continue",
    Label_Warning_ConfirmDelete: "Are you sure you want to delete the selected media?",
    Label_Warning_SelectionLimit: "You can only select {0} image",
    Flyout_BodyQuestion_AssignGalleries: "Choose which galleries you would like to add the selected media",
    Tooltip_LinkCopied: "Link copied",
    Label_DropFilesHereToUpload: "Drop files here to upload",
    Notifier_SaveWasSuccessful: "Saved",
    Button_SelectAll: "Select all",
    Button_ClearAll: "Clear selection",
    List_Galleries: "Galleries",
    Flyout_Title_AssignMediaType: "Categorise",
    Label_Warning_FlyoutIncorrectType: "Your media has been uploaded successfully, but is not displayed because it doesn't meet the minimum dimensions.",
    Label_Warning_SelectionLimitPlural: "You can only select up to {0} images",
    Label_Warning_AllMedia_HasMediaUploaded: "Drag and drop media into galleries on the left hand side to activate images online.",
    Menu_Delete: "Delete",
    Menu_Download: "Download",
    Button_AddMedia: "Upload",
    Button_AddImage: "Add",
    Button_RemoveFile: "Remove",
    Label_Warning_Restriction_res: "This image has a resolution which is too low for the {0} gallery, so it may be rejected by online travel agencies.",
    Label_Warning_Restriction_typ: " There is no category set. This is required for the {0} gallery.",
    Button_ChangeImage: "Change image",
    Label_Warning_GalleryRestrictedMediaType: "{0} file(s) could not be added to {1} gallery. The only allowed file types are {2}",
    Label_Warning_ConfirmRemoveMediaAssignment: "Are you sure you want to remove this image?",
    Label_Main_Image: "Main image",
    Flyout_Title_AssignGalleries: "Add to galleries",
    Flyout_Title_SelectImages: "Select or upload image",
    Label_Reorder: "Re-order",
    Label_Type: "Category",
    List_FileName: "File name",
    Menu_Categorize: "Edit",
    Menu_Remove: "Remove from gallery",
    Notifier_SaveAutomatic: "You changes will be saved automatically",
    Button_BulkActions: "Actions",
    Label_UploadMediaToGallery: "Upload to eviivo suite",
    Gallery_ListTitle: "In galleries:",
    Label_Warning_ConfirmRemoveImage: "Are you sure you want to remove the selected media from this gallery?",
    Button_Delete: "Delete",
    Label_Image_Caption: "Caption",
    Label_MaximumAllowedSize: "Maximum file upload size {0} MB",
    Label_Warning_AttentionRequired: "Attention required",
    Button_AddTag: "Add",
    Label_Uploaded: "Uploaded:"
}
