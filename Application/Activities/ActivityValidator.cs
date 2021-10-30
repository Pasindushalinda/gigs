using Domain;
using FluentValidation;

namespace Application.Activities
{
    public class ActivityValidator:AbstractValidator<Activity>
    {
        public ActivityValidator()
        {
            RuleFor(x => x.Title).NotNull();
            RuleFor(x => x.Description).NotNull();
            RuleFor(x => x.Date).NotNull();
            RuleFor(x => x.Category).NotNull();
            RuleFor(x => x.City).NotNull();
            RuleFor(x => x.Venue).NotNull();
        }
    }
}